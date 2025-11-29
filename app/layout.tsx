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
        url: "https://arootdigital.com/assets/ar-logo.png",
        width: 1200,
        height: 1200,
        alt: "A-Root Digital Growth Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A-Root Digital Growth | Expert Digital Marketing Services",
    description: "Transform your digital presence with our expert digital marketing services.",
    images: ["https://arootdigital.com/assets/ar-logo.png"],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#5a0d73" />
        <meta name="theme-color" content="#5a0d73" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arootdigital.com" />
        <meta property="og:title" content="A-Root Digital Growth | Expert Digital Marketing Services" />
        <meta property="og:description" content="Transform your digital presence with our expert digital marketing services. Drive growth with SEO, social media, content strategy, and more." />
        <meta property="og:image" content="https://arootdigital.com/assets/ar-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="A-Root Digital Growth Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://arootdigital.com" />
        <meta name="twitter:title" content="A-Root Digital Growth | Expert Digital Marketing Services" />
        <meta name="twitter:description" content="Transform your digital presence with our expert digital marketing services." />
        <meta name="twitter:image" content="https://arootdigital.com/assets/ar-logo.png" />
        <meta name="twitter:creator" content="@arootdigital" />
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

