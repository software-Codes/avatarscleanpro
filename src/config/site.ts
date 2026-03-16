export const siteConfig = {
  name: "Avatar CleanPro",
  description: "Professional cleaning services in Nairobi, Kenya. Expert fumigation, deep cleaning, carpet cleaning, laundry, nanny services & more. Trusted by 500+ customers. Get your free quote today!",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://avatarcleanpro.com",
  ogImage: "/images/og-image.jpg",
  // SEO-optimized business information
  business: {
    type: "LocalBusiness",
    category: "Cleaning Service",
    foundedYear: "2020",
    serviceArea: "Nairobi, Kenya",
    priceRange: "$$",
    paymentAccepted: ["Cash", "Mobile Money", "Bank Transfer"],
    languages: ["English", "Swahili"],
  },
  links: {
    facebook: "https://www.facebook.com/profile.php?id=61588078232879",
    instagram: "https://www.instagram.com/avatarcleanpro?igsh=N2puM25mNHN2Njhx",
    whatsapp: "https://wa.me/254757087848",
    tiktok: "https://www.tiktok.com/@avatarprocleaners?_r=1&_t=ZS-94Su2Uvu59l",
    linkedin: "https://www.linkedin.com/in/avatar-cleanpro-a486313b7/"
  },
  contact: {
    email: "avatarcleanpro@gmail.com",
    phone: "+254757087848",
    address: "Nairobi, Kenya",
    whatsappNumber: "+254757087848",
    // Structured data for local SEO
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    addressCountry: "Kenya",
    postalCode: "00100",
  },
  businessHours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "9:00 AM - 4:00 PM",
    // Structured data format
    structured: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      opens: "08:00",
      closes: "18:00"
    }
  },
  /** Google Maps embed URL for the contact page */
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32390054924!2d36.68258395533563!3d-1.303203560219592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1769052487793!5m2!1sen!2ske",
  // SEO Keywords for different services
  keywords: {
    primary: [
      "cleaning services Nairobi",
      "professional cleaning Kenya",
      "Avatar CleanPro",
      "fumigation services Nairobi",
      "deep cleaning Nairobi"
    ],
    secondary: [
      "carpet cleaning Nairobi",
      "office cleaning Kenya",
      "laundry services Nairobi",
      "nanny services Kenya",
      "post construction cleaning",
      "airbnb cleaning Nairobi"
    ],
    local: [
      "cleaning services near me",
      "professional cleaners Nairobi",
      "house cleaning Nairobi",
      "commercial cleaning Kenya"
    ]
  }
} as const;
