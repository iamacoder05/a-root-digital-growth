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
import Script from "next/script";

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
    icon: "/icon.png",
    apple: "/apple-icon.png",
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
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RMYJMJYGBB"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RMYJMJYGBB');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K2M9L657');`}
        </Script>

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Resource hints for performance */}
        <link rel="prefetch" href="/assets/raya-img.webp" as="image" />


      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2M9L657"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
