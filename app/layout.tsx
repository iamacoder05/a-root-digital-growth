import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://arootdigital.com'),
  title: {
    default: "A-Root Digital Growth | Expert Digital Marketing Services",
    template: "%s | A-Root Digital Growth",
  },
  description: "Transform your digital presence with A-Root Digital Growth. Expert digital marketing services including SEO, social media marketing, content strategy, and PPC advertising. Boost your online visibility and drive growth.",
  keywords: [
    "digital marketing",
    "SEO services",
    "social media marketing",
    "content marketing",
    "PPC advertising",
    "digital growth agency",
    "online marketing",
    "brand strategy",
    "web marketing",
    "digital transformation"
  ],
  authors: [{ name: "A-Root Digital Growth" }],
  creator: "A-Root Digital Growth",
  publisher: "A-Root Digital Growth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arootdigital.com",
    title: "A-Root Digital Growth | Expert Digital Marketing Services",
    description: "Transform your digital presence with our expert digital marketing services. Drive growth with SEO, social media, content strategy, and more.",
    siteName: "A-Root Digital Growth",
    images: [
      {
        url: "/assets/ar-logo.png",
        width: 1200,
        height: 630,
        alt: "A-Root Digital Growth Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Root Digital Growth | Expert Digital Marketing Services",
    description: "Transform your digital presence with our expert digital marketing services.",
    images: ["/assets/ar-logo.png"],
    creator: "@arootdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://arootdigital.com" />
        <meta name="theme-color" content="#5a0d73" />
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

