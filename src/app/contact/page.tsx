import type { Metadata } from "next";
import { Container } from "@/components/layout";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  GoogleMap,
} from "@/components/sections/contact";
import { BreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Contact Us - Get Free Quote | Professional Cleaning Services Nairobi",
  description:
    "Contact Avatar CleanPro for professional cleaning services in Nairobi. Call +254757087848, email avatarcleanpro@gmail.com or get a free quote online. Available Mon-Fri 8AM-6PM, weekends 9AM-4PM.",
  keywords: [
    "contact Avatar CleanPro",
    "cleaning services quote Nairobi",
    "professional cleaners contact",
    "cleaning services phone number",
    "Avatar CleanPro Nairobi contact",
    "free cleaning quote Kenya",
    "cleaning services near me"
  ],
  openGraph: {
    title: "Contact Avatar CleanPro | Professional Cleaning Services Nairobi",
    description:
      "Get in touch with Avatar CleanPro for professional cleaning services in Nairobi. Free quotes available. Call +254757087848 or contact us online.",
    url: "https://avatarcleanpro.com/contact",
    images: [
      {
        url: "https://avatarcleanpro.com/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Avatar CleanPro - Professional Cleaning Services Nairobi",
      },
    ],
  },
  twitter: {
    title: "Contact Avatar CleanPro | Professional Cleaning Services Nairobi",
    description: "Get in touch for professional cleaning services in Nairobi. Free quotes available. Call +254757087848.",
    images: ["https://avatarcleanpro.com/images/contact-hero.jpg"],
  },
  alternates: {
    canonical: "https://avatarcleanpro.com/contact",
  },
};

/**
 * Contact Page
 * Displays contact information, form, and map
 */
export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Info + Form Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information - 1/3 width on desktop */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>

            {/* Contact Form - 2/3 width on desktop */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Google Map Section */}
      <GoogleMap />
    </>
  );
}
