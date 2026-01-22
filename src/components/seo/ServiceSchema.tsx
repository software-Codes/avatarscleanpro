import { siteConfig } from "@/config/site";
import { ServiceCategory } from "@/types/services";

interface ServiceSchemaProps {
  category: ServiceCategory;
}

/**
 * Service Structured Data (JSON-LD)
 * Defines a service offered by the business
 */
export function ServiceSchema({ category }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/services#${category.slug}`,
    name: category.name,
    description: category.description,
    provider: {
      "@id": `${siteConfig.url}#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Nairobi",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${category.name} Services`,
      itemListElement: category.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
