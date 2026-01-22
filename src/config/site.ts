export const siteConfig = {
  name: "Avatar CleanPro",
  description: "Professional cleaning services for homes and businesses",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://avatarcleanpro.com",
  ogImage: "/images/og-image.jpg",
  links: {
    facebook: "https://facebook.com/avatarcleanpro",
    instagram: "https://instagram.com/avatarcleanpro",
  },
  contact: {
    email: "contact@avatarcleanpro.com",
    phone: "+1-XXX-XXX-XXXX",
    address: "Your Business Address",
  },
  businessHours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
  },
} as const;
