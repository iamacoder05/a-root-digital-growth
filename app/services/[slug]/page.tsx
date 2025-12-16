import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Star, Users, Target, Award, TrendingUp, Share2, ImageIcon } from 'lucide-react';
import CallbackRequestForm from '@/components/CallbackRequestForm';

// Service data with detailed information
const serviceDetails = {
  'seo-optimization': {
    title: 'SEO Optimization',
    icon: 'Search',
    image: '/assets/seo-optimization.jpg',
    description: 'Boost your search rankings with data-driven SEO strategies that deliver measurable results.',
    longDescription: 'Our comprehensive SEO optimization service combines technical expertise, content strategy, and data-driven insights to improve your search engine rankings and drive organic traffic to your website. We use the latest SEO techniques and tools to ensure your business appears at the top of search results.',
    features: [
      'Keyword research and analysis',
      'On-page optimization',
      'Technical SEO audit and fixes',
      'Content optimization and strategy',
      'Link building and outreach',
      'Local SEO optimization',
      'Monthly reporting and analytics'
    ],
    benefits: [
      'Increased organic traffic',
      'Higher search engine rankings',
      'Better user experience',
      'Long-term sustainable growth',
      'Competitive advantage'
    ],
    stats: [
      { label: 'Average Ranking Improvement', value: '85%', icon: TrendingUp },
      { label: 'Organic Traffic Growth', value: '150%', icon: Users },
      { label: 'Client Satisfaction', value: '98%', icon: Star }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    icon: 'Share2',
    image: '/assets/social-media-marketing.jpg',
    description: 'Engage your audience across all platforms with creative campaigns that convert.',
    longDescription: 'Our social media marketing service helps you build a strong online presence and engage with your target audience effectively. We create compelling content, manage your social media accounts, and run targeted campaigns that drive engagement and conversions.',
    features: [
      'Social media strategy development',
      'Content creation and scheduling',
      'Community management',
      'Paid social advertising',
      'Influencer partnerships',
      'Analytics and reporting',
      'Crisis management'
    ],
    benefits: [
      'Increased brand awareness',
      'Higher engagement rates',
      'More website traffic',
      'Better customer relationships',
      'Improved brand loyalty'
    ],
    stats: [
      { label: 'Engagement Rate', value: '320%', icon: Target },
      { label: 'Follower Growth', value: '200%', icon: Users },
      { label: 'ROI on Ads', value: '400%', icon: Award }
    ]
  },
  'content-marketing': {
    title: 'Content Marketing',
    icon: 'FileText',
    image: '/assets/content-marketing.jpg',
    description: 'Compelling content that tells your story and resonates with your target audience.',
    longDescription: 'Our content marketing service focuses on creating valuable, relevant content that attracts and retains your target audience. From blog posts to videos, we help you establish thought leadership and build lasting relationships with your customers.',
    features: [
      'Content strategy and planning',
      'Blog post creation',
      'Video content production',
      'Infographic design',
      'Email newsletter campaigns',
      'Content distribution',
      'Performance tracking'
    ],
    benefits: [
      'Established thought leadership',
      'Increased brand credibility',
      'Better customer engagement',
      'Higher conversion rates',
      'SEO benefits from content'
    ],
    stats: [
      { label: 'Content Engagement', value: '280%', icon: Target },
      { label: 'Lead Generation', value: '175%', icon: Users },
      { label: 'Content Shares', value: '350%', icon: Share2 }
    ]
  },
  'ppc-advertising': {
    title: 'PPC Advertising',
    icon: 'MousePointerClick',
    image: '/assets/ppc-advertising.jpg',
    description: 'Maximize ROI with strategic paid advertising campaigns across Google and social platforms.',
    longDescription: 'Our PPC advertising service maximizes your return on investment through expertly crafted paid campaigns. We manage your Google Ads, Facebook Ads, and other PPC platforms to drive targeted traffic and increase conversions.',
    features: [
      'Google Ads management',
      'Facebook & Instagram Ads',
      'Campaign strategy and setup',
      'Keyword research and bidding',
      'Ad creative optimization',
      'A/B testing and conversion tracking',
      'Monthly optimization and reporting'
    ],
    benefits: [
      'Immediate traffic generation',
      'Targeted audience reach',
      'Measurable ROI',
      'Quick results and scalability',
      'Competitive bidding advantage'
    ],
    stats: [
      { label: 'Average ROI', value: '300%', icon: TrendingUp },
      { label: 'Conversion Rate', value: '4.2%', icon: Target },
      { label: 'Cost Per Acquisition', value: '65% Lower', icon: Award }
    ]
  },
  'web-design': {
    title: 'Web Design',
    icon: 'Palette',
    image: '/assets/web-design.jpg',
    description: 'Beautiful, responsive websites that combine aesthetics with functionality.',
    longDescription: 'Our web design service creates stunning, user-friendly websites that not only look great but also perform exceptionally. We focus on responsive design, fast loading times, and intuitive user experience to help your business succeed online.',
    features: [
      'Custom website design',
      'Responsive layout development',
      'UI/UX design optimization',
      'Mobile-first approach',
      'E-commerce integration',
      'CMS implementation',
      'Performance optimization'
    ],
    benefits: [
      'Professional online presence',
      'Better user experience',
      'Increased conversion rates',
      'Mobile compatibility',
      'SEO-friendly structure'
    ],
    stats: [
      { label: 'Mobile Users', value: '85%', icon: Users },
      { label: 'Load Time Improvement', value: '60%', icon: TrendingUp },
      { label: 'Conversion Rate', value: '220%', icon: Target }
    ]
  },
  'analytics-insights': {
    title: 'Analytics & Insights',
    icon: 'TrendingUp',
    image: '/assets/analytics-insights.jpg',
    description: 'Data-driven insights that help you make informed decisions and track your growth.',
    longDescription: 'Our analytics service provides comprehensive data analysis and actionable insights to help you understand your audience, track performance, and make data-driven decisions that drive business growth.',
    features: [
      'Google Analytics setup and configuration',
      'Custom dashboard creation',
      'Performance reporting',
      'Conversion tracking',
      'A/B testing and analysis',
      'Competitor analysis',
      'ROI measurement and attribution'
    ],
    benefits: [
      'Data-driven decision making',
      'Performance optimization',
      'Better resource allocation',
      'Competitive intelligence',
      'Measurable business impact'
    ],
    stats: [
      { label: 'Data Accuracy', value: '99.5%', icon: Award },
      { label: 'Insight Implementation', value: '95%', icon: CheckCircle },
      { label: 'Revenue Growth', value: '180%', icon: TrendingUp }
    ]
  }
};

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-6 pt-24 border-b border-border/50 relative z-40 bg-background/95 backdrop-blur-sm">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            href="/#services"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section with Callback Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left Side - Service Content */}
            <div className="lg:col-span-3">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground" style={{ lineHeight: '1.4' }}>
                  {service.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>

                {/* Service Image */}
                <div className="mt-6">
                  {service.image ? (
                    <div className="relative w-full max-w-lg mx-auto aspect-video rounded-lg overflow-hidden shadow-md border border-border/50">
                      <Image
                        src={service.image}
                        alt={`${service.title} service illustration`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-lg mx-auto aspect-video rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <ImageIcon className="w-16 h-16 mx-auto mb-1 opacity-50" />
                        <p className="text-sm">Service Image</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {service.stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Callback Form */}
            <div className="lg:col-span-1 lg:sticky lg:top-8">
              <CallbackRequestForm serviceName={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold text-foreground mb-4">Need More Information?</h2>
          <p className="text-base text-muted-foreground mb-6">
            While you wait for our callback, explore how our other digital marketing services can complement your {service.title.toLowerCase()} strategy.
          </p>
          <div className="flex justify-center">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-300 text-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}
