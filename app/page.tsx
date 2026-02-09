import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ScrollHandler from "@/components/ScrollHandler";
import type { Metadata } from "next";

// Lazy load below-the-fold components
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-[400px]" />,
});
// const Portfolio = dynamic(() => import("@/components/Portfolio"), {
//   loading: () => <div className="min-h-[400px]" />,
// });
const Clients = dynamic(() => import("@/components/Clients"), {
  loading: () => <div className="min-h-[300px]" />,
});
const LatestBlog = dynamic(() => import("@/components/LatestBlog"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="min-h-[400px]" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[600px]" />,
});
const SectionDivider = dynamic(() => import("@/components/SectionDivider"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: {
    absolute: "ARoot Digital",
  },
  description: "Transform your digital presence with A-Root Digital Growth. Expert digital marketing services including SEO, social media marketing, content strategy, and PPC advertising.",
  alternates: {
    canonical: "https://arootdigital.com",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://arootdigital.com/#organization",
      name: "A-Root Digital Growth",
      url: "https://arootdigital.com",
      logo: {
        "@type": "ImageObject",
        url: "https://arootdigital.com/assets/ar-logo.png",
        width: 224,
        height: 224,
      },
      sameAs: [
        "https://www.facebook.com/arootdigital",
        "https://www.instagram.com/arootdigital",
        "https://www.linkedin.com/company/arootdigital",
        "https://twitter.com/arootdigital",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 7498826065",
        contactType: "Customer Service",
        email: "info@arootdigital.com",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://arootdigital.com/#website",
      url: "https://arootdigital.com",
      name: "A-Root Digital Growth",
      description: "Expert digital marketing services to transform your online presence",
      publisher: {
        "@id": "https://arootdigital.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://arootdigital.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://arootdigital.com/#webpage",
      url: "https://arootdigital.com",
      name: "A-Root Digital Growth | Expert Digital Marketing Services",
      isPartOf: {
        "@id": "https://arootdigital.com/#website",
      },
      about: {
        "@id": "https://arootdigital.com/#organization",
      },
      description: "Transform your digital presence with our expert digital marketing services including SEO, social media marketing, content strategy, and PPC advertising.",
    },
    {
      "@type": "Service",
      serviceType: "Digital Marketing",
      provider: {
        "@id": "https://arootdigital.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Optimization",
              description: "Boost your search engine rankings and drive organic traffic",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Social Media Marketing",
              description: "Engage your audience across all major platforms",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Marketing",
              description: "Create compelling content that converts",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PPC Advertising",
              description: "Maximize ROI with targeted advertising campaigns",
            },
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <main>
          <Hero />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <About />
          <SectionDivider />
          {/* <Portfolio /> */}
          <SectionDivider />
          <Clients />
          <SectionDivider />
          <LatestBlog />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <FAQ />
          <SectionDivider />
          <Contact />
        </main>
      </div>
    </>
  );
}
