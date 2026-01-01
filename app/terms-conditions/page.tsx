import { Metadata } from "next";
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Shield } from "lucide-react";
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
  title: "Terms & Conditions | ARoot Digital",
  description: "Read ARoot Digital's terms and conditions for using our website and services.",
};

const TermsConditions = () => {
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
              <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Agreement to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Use License</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Permission is granted to temporarily download one copy of the materials on ARoot Digital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Disclaimer</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  The materials on ARoot Digital's website are provided on an 'as is' basis. ARoot Digital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Further, ARoot Digital does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <XCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Limitations</h2>
                <p className="text-foreground/80 leading-relaxed">
                  In no event shall ARoot Digital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ARoot Digital's website, even if ARoot Digital or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Services</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  ARoot Digital provides digital marketing services including but not limited to SEO, social media marketing, content marketing, PPC advertising, and web design. By engaging our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Pay all fees as agreed upon in service agreements</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Intellectual Property</h2>
                <p className="text-foreground/80 leading-relaxed">
                  All content, features, and functionality of this website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of ARoot Digital and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">User Accounts</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Payment Terms</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Payment terms for our services will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li>Payment is due as specified in your service agreement</li>
                  <li>Late payments may incur additional fees</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>Refunds are subject to the terms of your specific service agreement</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Governing Law</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Changes to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  ARoot Digital reserves the right to revise these terms and conditions at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-border/50">
            <div className="flex items-start gap-4 mb-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  If you have any questions about these Terms & Conditions, please contact us:
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

export default TermsConditions;
