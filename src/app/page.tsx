import {
  HeroSection,
  TrustIndicators,
  ServicesOverview,
  WhyChooseUs,
  Testimonials,
  CTASection,
} from "@/components/sections/home";
import {
  LocalBusinessSchema,
  WebsiteSchema,
} from "@/components/seo";

/**
 * Home Page - Avatar CleanPro Landing Page
 *
 * Sections:
 * 1. Hero - Main headline, CTAs, and trust badge
 * 2. Trust Indicators - Stats showing social proof
 * 3. Services Overview - Featured service categories
 * 4. Why Choose Us - Key benefits and differentiators
 * 5. Testimonials - Customer reviews carousel
 * 6. CTA Section - Final call to action
 */
export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <LocalBusinessSchema />
      <WebsiteSchema />

      {/* Page Content */}
      <HeroSection />
      <TrustIndicators />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
