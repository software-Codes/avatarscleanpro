export const siteConfig = {
  name: "Avatar CleanPro",
  description: "Professional cleaning services for homes and businesses",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://avatarcleanpro.com",
  ogImage: "/images/og-image.jpg",
  links: {
    facebook: "https://facebook.com/avatarcleanpro",
    instagram: "https://instagram.com/avatarcleanpro",
    whatsapp: "https://wa.me/qr/LWD2XFCCTBY5G1",
  },
  contact: {
    email: "contact@avatarcleanpro.com",
    phone: "0115671073",
    address: "Nairobi, Kenya",
    whatsappNumber: "0115671073", // Replace with actual WhatsApp number
  },
  businessHours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  /** Google Maps embed URL for the contact page */
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32390054924!2d36.68258395533563!3d-1.303203560219592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1769052487793!5m2!1sen!2ske",
} as const;
