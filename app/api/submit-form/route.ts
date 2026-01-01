import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface FormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  serviceName?: string;
  selectedServices?: string[];
}

// HubSpot API integration
// Uses "upsert" to create new contact or update existing one based on phone number
async function createHubSpotContact(data: FormData) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY;
  if (!hubspotApiKey) {
    console.warn('HubSpot API key not configured');
    return null;
  }

  try {
    // Build properties - only use standard HubSpot properties that definitely exist
    const properties: Record<string, string> = {
      phone: data.phone,
      firstname: data.name.split(' ')[0] || data.name,
      lastname: data.name.split(' ').slice(1).join(' ') || '',
      // Set default lead status (standard HubSpot property)
      hs_lead_status: 'NEW', // Lead Status: NEW, OPEN, IN_PROGRESS, OPEN_DEAL, UNQUALIFIED, ATTEMPTED_TO_CONTACT, CONNECTED, BAD_TIMING, NOT_INTERESTED
      // Track where the lead came from (use valid option)
      hs_analytics_source: 'DIRECT_TRAFFIC', // Valid options: ORGANIC_SEARCH, PAID_SEARCH, EMAIL_MARKETING, SOCIAL_MEDIA, REFERRALS, OTHER_CAMPAIGNS, DIRECT_TRAFFIC, OFFLINE, PAID_SOCIAL, AI_REFERRALS
    };
    
    // Add email if provided (optional)
    if (data.email && data.email.trim()) {
      properties.email = data.email;
    }

    // Add Services custom property
    // TODO: Replace 'services' with your actual HubSpot internal property name
    // To find it: HubSpot → Settings → Properties → Contact Properties → Click "Services" → Check "Internal name"
    if (data.serviceName || data.selectedServices?.length) {
      const servicesValue = data.serviceName || data.selectedServices?.join(', ') || '';
      if (servicesValue) {
        // Try common property names - update with your exact internal name
        properties.services = servicesValue; // Common names: 'services', 'service_interest', 'service_name'
      }
    }

    // Add Client Comments custom property
    // TODO: Replace 'client_comments' with your actual HubSpot internal property name
    // To find it: HubSpot → Settings → Properties → Contact Properties → Click "Client Comments" → Check "Internal name"
    if (data.message) {
      // Try common property names - update with your exact internal name
      properties.client_comments = data.message; // Common names: 'client_comments', 'client_comment', 'comments'
    }

    // Use standard create endpoint first, then update if contact exists
    // This is more reliable than batch upsert
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = 'HubSpot API error';
      let errorJson: any = {};
      
      try {
        errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorText;
      } catch {
        errorMessage = errorText;
      }
      
      // If contact already exists (409 Conflict), update it instead
      if (response.status === 409 || (errorJson.errors?.some((e: any) => e.code === 'CONTACT_EXISTS'))) {
        console.log('Contact already exists (by phone), updating instead...');
        return await updateHubSpotContact(data, hubspotApiKey, properties);
      }
      
      // For 400 validation errors, check if it's because contact exists or property errors
      if (response.status === 400) {
        // Check if error indicates contact exists (some HubSpot APIs return 400 for duplicates)
        const hasDuplicateError = errorJson.errors?.some((e: any) => 
          e.message?.toLowerCase().includes('already exists') ||
          e.message?.toLowerCase().includes('duplicate') ||
          e.code === 'DUPLICATE_ENTRY'
        );
        
        if (hasDuplicateError) {
          console.log('Contact appears to exist (by phone), updating instead...');
          return await updateHubSpotContact(data, hubspotApiKey, properties);
        } else {
          // It's a property validation error, not a duplicate
          console.error('HubSpot validation error (likely invalid properties):', errorMessage);
          // Try to create with minimal properties (just phone, firstname, lastname)
          return await createHubSpotContactMinimal(data, hubspotApiKey);
        }
      }
      
      console.error('HubSpot API error:', errorMessage);
      return null;
    }

    const result = await response.json();
    console.log('HubSpot contact created successfully:', result.id || result.properties?.phone || data.phone);
    return result;
  } catch (error) {
    console.error('HubSpot integration error:', error);
    return null;
  }
}

// Update existing HubSpot contact
async function updateHubSpotContact(data: FormData, hubspotApiKey: string, properties: Record<string, string>) {
  try {
    // First, find the contact by phone number using search API
    const searchResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(data.phone)}?idProperty=phone`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${hubspotApiKey}`,
        },
      }
    );

    if (!searchResponse.ok) {
      // Contact doesn't exist, try creating it instead
      console.log('Contact not found, attempting to create instead...');
      return await createHubSpotContactMinimal(data, hubspotApiKey);
    }

    const contact = await searchResponse.json();
    const contactId = contact.id;

    // Update the contact
    const updateResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties,
      }),
    });

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      console.error('HubSpot update error:', errorText);
      return null;
    }

    const result = await updateResponse.json();
    console.log('HubSpot contact updated successfully:', result.id || data.phone);
    return result;
  } catch (error) {
    console.error('HubSpot update error:', error);
    return null;
  }
}

// Create contact with minimal required properties only
async function createHubSpotContactMinimal(data: FormData, hubspotApiKey: string) {
  try {
    // Only use standard HubSpot properties that definitely exist
    const minimalProperties: Record<string, string> = {
      phone: data.phone,
      firstname: data.name.split(' ')[0] || data.name,
      lastname: data.name.split(' ').slice(1).join(' ') || '',
      // Include standard HubSpot properties that exist
      hs_lead_status: 'NEW',
      hs_analytics_source: 'DIRECT_TRAFFIC',
    };

    // Add email if provided (optional)
    if (data.email && data.email.trim()) {
      minimalProperties.email = data.email;
    }

    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hubspotApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: minimalProperties,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('HubSpot minimal create error:', errorText);
      return null;
    }

    const result = await response.json();
    console.log('HubSpot contact created successfully (minimal properties):', result.id || data.phone);
    return result;
  } catch (error) {
    console.error('HubSpot minimal create error:', error);
    return null;
  }
}

// Send lead notification email
async function sendLeadEmail(data: FormData) {
  const leadEmail = process.env.LEAD_EMAIL || process.env.RESEND_FROM_EMAIL;
  
  if (!leadEmail) {
    console.warn('Lead email not configured');
    return null;
  }

  try {
    const emailContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Notification</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f4;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #5a0d73 0%, #7a1d93 100%); padding: 30px 40px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                      🚀 New Lead Received
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.9;">
                      Website Contact Form Submission
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <!-- Contact Information Card -->
                    <div style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-left: 4px solid #5a0d73; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #5a0d73; font-size: 20px; font-weight: 600;">
                        Contact Information
                      </h2>
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <strong style="color: #495057; font-size: 14px; display: inline-block; min-width: 120px;">Name:</strong>
                            <span style="color: #212529; font-size: 15px; font-weight: 500;">${data.name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <strong style="color: #495057; font-size: 14px; display: inline-block; min-width: 120px;">Email:</strong>
                            <a href="mailto:${data.email}" style="color: #5a0d73; text-decoration: none; font-size: 15px; font-weight: 500;">${data.email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <strong style="color: #495057; font-size: 14px; display: inline-block; min-width: 120px;">Phone:</strong>
                            <a href="tel:${data.phone}" style="color: #5a0d73; text-decoration: none; font-size: 15px; font-weight: 500;">${data.phone}</a>
                          </td>
                        </tr>
                        ${data.serviceName ? `
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <strong style="color: #495057; font-size: 14px; display: inline-block; min-width: 120px;">Service:</strong>
                            <span style="background: #5a0d73; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500; display: inline-block;">${data.serviceName}</span>
                          </td>
                        </tr>
                        ` : ''}
                        ${data.selectedServices && data.selectedServices.length > 0 ? `
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <strong style="color: #495057; font-size: 14px; display: inline-block; min-width: 120px; vertical-align: top; padding-top: 4px;">Services:</strong>
                            <div style="display: inline-block;">
                              ${data.selectedServices.map((service: string) => `
                                <span style="background: #5a0d73; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500; display: inline-block; margin: 2px 4px 2px 0;">${service}</span>
                              `).join('')}
                            </div>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </div>
                    
                    ${data.message ? `
                    <!-- Message Card -->
                    <div style="background: #f8f9fa; border-left: 4px solid #5a0d73; padding: 25px; border-radius: 8px; margin-bottom: 30px;">
                      <h2 style="margin: 0 0 15px 0; color: #5a0d73; font-size: 20px; font-weight: 600;">
                        Message
                      </h2>
                      <p style="margin: 0; color: #212529; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
                    </div>
                    ` : ''}
                    
                    <!-- Quick Actions -->
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 0 10px;">
                            <a href="mailto:${data.email}" style="display: inline-block; background: #5a0d73; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; margin: 5px;">
                              📧 Reply via Email
                            </a>
                          </td>
                          <td style="padding: 0 10px;">
                            <a href="tel:${data.phone}" style="display: inline-block; background: #28a745; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 600; margin: 5px;">
                              📞 Call Now
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #e9ecef;">
                    <p style="margin: 0; color: #6c757d; font-size: 12px; line-height: 1.5;">
                      <strong>Received:</strong> ${new Date().toLocaleString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric', 
                        hour: '2-digit', 
                        minute: '2-digit',
                        timeZoneName: 'short'
                      })}
                    </p>
                    <p style="margin: 10px 0 0 0; color: #adb5bd; font-size: 11px;">
                      This is an automated notification from your website contact form.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Use your own domain email for better deliverability
    // Set RESEND_FROM_EMAIL in .env.local (e.g., noreply@yourdomain.com)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    const result = await resend.emails.send({
      from: fromEmail,
      to: leadEmail,
      subject: `New Lead: ${data.name} - ${data.serviceName || 'Contact Form'}`,
      html: emailContent,
    });

    return result;
  } catch (error) {
    console.error('Lead email error:', error);
    return null;
  }
}

// Send auto-reply email to user
async function sendAutoReply(data: FormData) {
  try {
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5a0d73;">Thank You for Contacting A-Root Digital Growth!</h2>
        <p>Hi ${data.name},</p>
        <p>Thank you for reaching out to us! We've received your message and one of our team members will get back to you within 24 hours.</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Your Details:</strong></p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phone}</p>
          ${data.serviceName ? `<p>Service: ${data.serviceName}</p>` : ''}
        </div>
        <p>In the meantime, feel free to explore our services and blog for more insights.</p>
        <p>Best regards,<br><strong>A-Root Digital Growth Team</strong></p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          This is an automated email. Please do not reply to this message.
        </p>
      </div>
    `;

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: data.email,
      subject: 'Thank You for Contacting A-Root Digital Growth',
      html: emailContent,
    });

    return result;
  } catch (error) {
    console.error('Auto-reply email error:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, serviceName, selectedServices } = body;

    // Validate required fields (email is optional)
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name and phone are required' },
        { status: 400 }
      );
    }

    const formData: FormData = {
      name,
      email,
      phone,
      message,
      serviceName,
      selectedServices,
    };

    // Execute all operations in parallel
    const operations = [
      createHubSpotContact(formData),
      sendLeadEmail(formData),
    ];
    
    // Only send auto-reply if email is provided
    if (email && email.trim()) {
      operations.push(sendAutoReply(formData));
    }
    
    const [hubspotResult, leadEmailResult, autoReplyResult] = await Promise.allSettled(operations);

    // Log results (optional)
    console.log('HubSpot:', hubspotResult.status);
    console.log('Lead Email:', leadEmailResult.status);

    // Return success even if some integrations fail (graceful degradation)
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

