import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import {
  ServicesHero,
  CategoryNavigation,
  ServiceCategory,
} from "@/components/sections/services";
import { ServiceSchema } from "@/components/seo";
import {
  serviceCategories,
  getCategoryCount,
  getTotalServiceCount,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive range of professional cleaning services including residential, commercial, deep cleaning, laundromat, nanny services, and more. 10 categories with 35+ services to meet all your needs.",
  openGraph: {
    title: "Our Cleaning Services | Avatar CleanPro",
    description:
      "Explore our comprehensive range of professional cleaning services. Quality you can trust.",
    url: "https://avatarcleanpro.com/services",
  },
  alternates: {
    canonical: "https://avatarcleanpro.com/services",
  },
};

/**
 * Services Page
 * Displays all service categories and individual services with filtering
 */
export default function ServicesPage() {
  const categoryCount = getCategoryCount();
  const serviceCount = getTotalServiceCount();

  return (
    <>
      {/* Structured Data for each service category */}
      {serviceCategories.map((category) => (
        <ServiceSchema key={category.id} category={category} />
      ))}

      {/* Hero Section */}
      <ServicesHero
        categoryCount={categoryCount}
        serviceCount={serviceCount}
      />

      {/* Sticky Category Navigation */}
      <CategoryNavigation categories={serviceCategories} />

      {/* All Service Categories */}
      <div className="bg-muted/30">
        {serviceCategories.map((category, index) => (
          <div key={category.id}>
            <ServiceCategory category={category} />
            {/* Separator between categories */}
            {index < serviceCategories.length - 1 && (
              <Container>
                <hr className="border-border/50" />
              </Container>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Need a <span className="text-gradient">Custom Service?</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Can't find exactly what you're looking for? Contact us for a
              custom quote tailored to your specific needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg gap-2 min-h-[52px]"
            >
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                Contact Us for a Free Quote
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
