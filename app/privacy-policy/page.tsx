import { Metadata } from "next";
import { Shield, Lock, Eye, FileText, UserCheck, Database } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ARoot Digital",
  description: "Learn how ARoot Digital protects your privacy and handles your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pt-24 md:pt-28">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Introduction</h2>
                <p className="text-foreground/80 leading-relaxed">
                  ARoot Digital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Information We Collect</h2>
                <div className="space-y-4 text-foreground/80">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Register for our services</li>
                      <li>Fill out contact forms or request information</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Communicate with us via email or phone</li>
                    </ul>
                    <p className="mt-3 leading-relaxed">
                      This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our website, we automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <Eye className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">How We Use Your Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your requests and transactions</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze website usage and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Information Sharing and Disclosure</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Data Security</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p className="mt-3 leading-relaxed">
                  To exercise these rights, please contact us at <a href="mailto:info@arootdigital.com" className="text-primary hover:underline">info@arootdigital.com</a>.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Cookies and Tracking Technologies</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Changes to This Privacy Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="space-y-2 text-foreground/80">
                  <p><strong>Email:</strong> <a href="mailto:info@arootdigital.com" className="text-primary hover:underline">info@arootdigital.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+919561964239" className="text-primary hover:underline">+91 9561964239</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-accent transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
