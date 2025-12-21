import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 0.8,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Blog | ARoot Digital",
  description: "Latest insights, tips, and trends in digital marketing, SEO, social media, and content strategy.",
  alternates: {
    canonical: "https://arootdigital.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

