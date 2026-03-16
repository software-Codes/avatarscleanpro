import { siteConfig } from "@/config/site";

/**
 * Local Business Structured Data for SEO
 * Provides rich snippets for search engines
 */
export function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/cleanpro-logo.jpg`,
    image: [
      `${siteConfig.url}/images/hero-main.jpg`,
      `${siteConfig.url}/images/services-hero.jpg`,
      `${siteConfig.url}/images/contact-hero.jpg`
    ],
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    foundingDate: siteConfig.business.foundedYear,
    priceRange: siteConfig.business.priceRange,
    paymentAccepted: siteConfig.business.paymentAccepted,
    currenciesAccepted: "KES",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.addressLocality,
      addressRegion: siteConfig.contact.addressRegion,
      addressCountry: siteConfig.contact.addressCountry,
      postalCode: siteConfig.contact.postalCode
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.2921,
      longitude: 36.8219
    },
    areaServed: {
      "@type": "City",
      name: "Nairobi",
      containedInPlace: {
        "@type": "Country",
        name: "Kenya"
      }
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "16:00"
      }
    ],
    serviceType: [
      "Professional Cleaning Services",
      "Fumigation Services",
      "Deep Cleaning",
      "Carpet and Upholstery Cleaning",
      "Laundry Services",
      "Office Cleaning",
      "Nanny Services",
      "Post Construction Cleaning",
      "AirBnB Management",
      "Cleaning Training"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fumigation Services",
            description: "Professional pest control and fumigation services for homes and offices"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deep Cleaning",
            description: "Intensive top-to-bottom cleaning for thorough sanitation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carpet & Upholstery Cleaning",
            description: "Specialized cleaning for carpets, sofas, and fabric furniture"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mama Fua Services",
            description: "Comprehensive household services including cleaning and childcare"
          }
        }
      ]
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.tiktok
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah M."
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "Excellent service! Avatar CleanPro transformed our office space. Professional, reliable, and thorough."
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "John K."
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5"
        },
        reviewBody: "Best cleaning service in Nairobi! Their fumigation service solved our pest problem completely."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Website Structured Data
 */
export function WebsiteSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}#business`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/services?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    inLanguage: "en-KE"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Organization Structured Data
 */
export function OrganizationSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/cleanpro-logo.jpg`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Swahili"],
      areaServed: "KE"
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.tiktok
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}