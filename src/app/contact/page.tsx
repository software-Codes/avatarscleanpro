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
  title: "Contact Us",
  description:
    "Get in touch with Avatar CleanPro for a free quote or any questions about our professional cleaning services. Call, email, or send us a message.",
  openGraph: {
    title: "Contact Us | Avatar CleanPro",
    description:
      "Get in touch with Avatar CleanPro for a free quote. We're here to help with all your cleaning needs.",
    url: "https://avatarcleanpro.com/contact",
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
