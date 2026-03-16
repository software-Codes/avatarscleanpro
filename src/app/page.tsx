import type { Metadata } from "next";
import {
  HeroSection,
  TrustIndicators,
  ServicesOverview,
  WhyChooseUs,
  Testimonials,
  CTASection,
} from "@/components/sections/home";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Nairobi, Kenya",
  description: "Avatar CleanPro offers expert cleaning services in Nairobi including fumigation, deep cleaning, carpet cleaning, laundry, and nanny services. Trusted by 500+ customers. Get your free quote today!",
  keywords: [
    "cleaning services Nairobi",
    "professional cleaning Kenya",
    "fumigation services Nairobi",
    "deep cleaning Nairobi",
    "carpet cleaning Kenya",
    "laundry services Nairobi",
    "nanny services Kenya",
    "office cleaning Nairobi",
    "house cleaning services",
    "Avatar CleanPro"
  ],
  openGraph: {
    title: "Avatar CleanPro | Professional Cleaning Services in Nairobi, Kenya",
    description: "Expert cleaning services including fumigation, deep cleaning, carpet cleaning & more. Trusted by 500+ customers in Nairobi. Get your free quote today!",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/images/hero-main.jpg`,
        width: 1200,
        height: 630,
        alt: "Avatar CleanPro - Professional Cleaning Services in Nairobi",
      },
    ],
  },
  twitter: {
    title: "Avatar CleanPro | Professional Cleaning Services in Nairobi, Kenya",
    description: "Expert cleaning services including fumigation, deep cleaning, carpet cleaning & more. Trusted by 500+ customers in Nairobi.",
    images: [`${siteConfig.url}/images/hero-main.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

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
