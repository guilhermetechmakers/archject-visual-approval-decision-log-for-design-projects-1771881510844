import {
  NavigationHeader,
  HeroBlock,
  FeatureCardGrid,
  HowItWorksSection,
  TemplatesGallery,
  PricingPreview,
  LogosTestimonials,
  CTABar,
  Footer,
} from '@/components/landing'
import {
  heroData,
  featuresData,
  howItWorksData,
  templatesData,
  pricingData,
  logosData,
  testimonialsData,
} from '@/components/landing/landing-data'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <HeroBlock
          title={heroData.title}
          subtitle={heroData.subtitle}
          ctaPrimary={heroData.ctaPrimary}
          ctaSecondary={heroData.ctaSecondary}
          media={heroData.media}
        />
        <FeatureCardGrid features={featuresData} id="features" />
        <HowItWorksSection steps={howItWorksData} id="how-it-works" />
        <TemplatesGallery templates={templatesData} id="templates" />
        <PricingPreview tiers={pricingData} id="pricing" />
        <LogosTestimonials logos={logosData} testimonials={testimonialsData} />
        <CTABar
          title="Ready to streamline approvals?"
          subtitle="Join architecture and design studios who ship decisions faster."
          ctaPrimary={{ label: 'Start free', href: '/signup' }}
          ctaSecondary={{ label: 'Request demo', href: '/demo-request' }}
        />
        <Footer />
      </main>
    </div>
  )
}
