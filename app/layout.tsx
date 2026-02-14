import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import ChunkErrorHandler from "@/components/ChunkErrorHandler";
import "@/styles/globals.css";
import type { Metadata } from "next";

// Lazy load non-critical components
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <footer className="min-h-[200px]" />,
  ssr: true,
});
// Defer ChatBot and WhatsAppButton until after initial render
const ChatBot = dynamic(() => import("@/components/ChatBot"), {
  ssr: false,
  loading: () => null,
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
  loading: () => null,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arootdigital.com'),
  title: {
    default: "Aroot Digital | Expert Digital Marketing Services",
    template: "%s | Aroot Digital",
  },
  description: "Transform your digital presence with Aroot Digital. Expert digital marketing services including SEO, social media marketing, content strategy, and PPC advertising. Boost your online visibility and drive growth.",
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
  authors: [{ name: "Aroot Digital" }],
  creator: "Aroot Digital",
  publisher: "Aroot Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arootdigital.com",
    title: "Aroot Digital | Expert Digital Marketing Services",
    description: "Transform your digital presence with our expert digital marketing services. Drive growth with SEO, social media, content strategy, and more.",
    siteName: "Aroot Digital",
    images: [
      {
        url: "https://arootdigital.com/logo.png",
        width: 1200,
        height: 1200,
        alt: "Aroot Digital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroot Digital | Expert Digital Marketing Services",
    description: "Transform your digital presence with our expert digital marketing services.",
    images: ["https://arootdigital.com/logo.png"],
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
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Resource hints for performance */}
        <link rel="prefetch" href="/assets/raya-img.webp" as="image" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#5a0d73" />
        <meta name="theme-color" content="#5a0d73" />
      </head>
      <body>
        <ChunkErrorHandler />
        <Providers>
          <TooltipProvider>
            <Navigation />
            <Toaster />
            <Sonner />
            {children}
            <Footer />
            {/* Defer ChatBot and WhatsAppButton - loaded client-side only */}
            <ChatBot />
            <WhatsAppButton />
            <SpeedInsights />
            <Analytics />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}

