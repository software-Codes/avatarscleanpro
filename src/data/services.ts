import { ServiceCategory } from "@/types/services";

/**
 * Complete service categories and offerings for Avatar CleanPro
 * 10 categories with 35+ individual services
 */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "mama-fua",
    name: "Mama Fua (Housekeeper)",
    slug: "mama-fua",
    description: "Comprehensive household services including cleaning, childcare, and laundry assistance",
    icon: "Home",
    color: "teal",
    services: [
      {
        id: "duvet-hand-wash",
        name: "Duvet (Hand Wash)",
        slug: "duvet-hand-wash",
        description: "Professional hand washing of duvets with care and attention to detail",
        pricingModel: "per-piece",
        category: "mama-fua",
        icon: "Wind",
      },
      {
        id: "folding",
        name: "Folding Per Basket",
        slug: "folding",
        description: "Neat folding and organizing of your laundry items",
        pricingModel: "per-basket",
        category: "mama-fua",
        icon: "FolderOpen",
      },
      {
        id: "baby-sitting",
        name: "Baby Sitting Per Hour",
        slug: "baby-sitting",
        description: "Trusted and reliable childcare services by trained professionals",
        pricingModel: "per-hour",
        category: "mama-fua",
        icon: "Baby",
        popular: true,
      },
      {
        id: "daybug",
        name: "Daybug Per Hour",
        slug: "daybug",
        description: "Daytime household assistance and support services",
        pricingModel: "per-hour",
        category: "mama-fua",
        icon: "Clock",
      },
      {
        id: "house-cleaning",
        name: "House Cleaning Per Room",
        slug: "house-cleaning",
        description: "Thorough room-by-room cleaning service for your home",
        pricingModel: "per-room",
        category: "mama-fua",
        icon: "Sparkles",
        popular: true,
      },
      {
        id: "ironing",
        name: "Ironing Per Basket",
        slug: "ironing",
        description: "Professional ironing services for wrinkle-free clothes",
        pricingModel: "per-basket",
        category: "mama-fua",
        icon: "Shirt",
      },
    ],
  },
  {
    id: "fumigation",
    name: "Fumigation",
    slug: "fumigation",
    description: "Professional pest control and fumigation services for homes and offices",
    icon: "Bug",
    color: "orange",
    services: [
      {
        id: "fumigation-bedroom",
        name: "Fumigation Per Bedroom",
        slug: "fumigation-bedroom",
        description: "Complete pest elimination treatment for bedrooms with safe, effective products",
        pricingModel: "per-bedroom",
        category: "fumigation",
        icon: "Shield",
      },
    ],
  },
  {
    id: "seats-carpets",
    name: "Seats & Carpets",
    slug: "seats-carpets",
    description: "Specialized upholstery and fabric cleaning services",
    icon: "Sofa",
    color: "purple",
    services: [
      {
        id: "bed-cleaning",
        name: "Bed Cleaning Per Piece",
        slug: "bed-cleaning",
        description: "Deep cleaning for beds and bed frames",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Bed",
      },
      {
        id: "carpet-cleaning",
        name: "Carpet Cleaning Per Piece",
        slug: "carpet-cleaning",
        description: "Professional carpet deep cleaning and stain removal",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "LayoutGrid",
        popular: true,
      },
      {
        id: "curtain-cleaning",
        name: "Curtain Cleaning Per Piece",
        slug: "curtain-cleaning",
        description: "Thorough curtain and drape cleaning service",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Frame",
      },
      {
        id: "mattress-cleaning",
        name: "Mattress Cleaning Per Piece",
        slug: "mattress-cleaning",
        description: "Sanitization and stain removal for mattresses",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Bed",
        popular: true,
      },
      {
        id: "seat-cleaning",
        name: "Seat Cleaning Per Seater",
        slug: "seat-cleaning",
        description: "Sofa and chair upholstery cleaning",
        pricingModel: "per-seater",
        category: "seats-carpets",
        icon: "Armchair",
        popular: true,
      },
    ],
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description: "Intensive top-to-bottom cleaning for thorough sanitation",
    icon: "Sparkles",
    color: "blue",
    services: [
      {
        id: "deep-cleaning-bedroom",
        name: "Deep Cleaning Per Bedroom",
        slug: "deep-cleaning-bedroom",
        description: "Comprehensive deep cleaning service covering every corner of your bedroom",
        pricingModel: "per-bedroom",
        category: "deep-cleaning",
        icon: "Sparkles",
        popular: true,
      },
    ],
  },
  {
    id: "airbnb-management",
    name: "AirBnB Management",
    slug: "airbnb-management",
    description: "Professional property management for short-term rentals",
    icon: "Building",
    color: "rose",
    services: [
      {
        id: "airbnb-monthly",
        name: "AirBnB Per Month",
        slug: "airbnb-monthly",
        description: "Complete AirBnB property management including cleaning and guest coordination",
        pricingModel: "monthly",
        category: "airbnb-management",
        icon: "Calendar",
      },
    ],
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    slug: "office-cleaning",
    description: "Professional cleaning solutions for workplaces and commercial spaces",
    icon: "Briefcase",
    color: "slate",
    services: [
      {
        id: "one-off-office",
        name: "One-Off Cleaning Per Room",
        slug: "one-off-office",
        description: "Single-session office cleaning service for immediate needs",
        pricingModel: "per-room",
        category: "office-cleaning",
        icon: "Building2",
      },
      {
        id: "permanent-office",
        name: "Permanent Office Cleaning Service",
        slug: "permanent-office",
        description: "Ongoing office cleaning maintenance contract with regular scheduling",
        pricingModel: "monthly",
        category: "office-cleaning",
        icon: "CalendarCheck",
        popular: true,
      },
    ],
  },
  {
    id: "post-construction",
    name: "Post Construction Cleaning",
    slug: "post-construction",
    description: "Specialized cleaning for newly built or renovated spaces",
    icon: "Hammer",
    color: "amber",
    services: [
      {
        id: "stand-alone",
        name: "Stand Alone Per Bedroom",
        slug: "stand-alone",
        description: "Post-construction cleaning for single residential units",
        pricingModel: "per-bedroom",
        category: "post-construction",
        icon: "Home",
      },
      {
        id: "apartments",
        name: "Several Units (Apartments)",
        slug: "apartments",
        description: "Bulk post-construction cleaning for apartment complexes and developments",
        pricingModel: "per-project",
        category: "post-construction",
        icon: "Building",
      },
    ],
  },
  {
    id: "laundromat",
    name: "Laundromat",
    slug: "laundromat",
    description: "Complete laundry and garment care services",
    icon: "Shirt",
    color: "cyan",
    services: [
      {
        id: "normal-laundry",
        name: "Normal Laundry Per Kg",
        slug: "normal-laundry",
        description: "Standard wash, dry, and fold service for everyday laundry",
        pricingModel: "per-kg",
        category: "laundromat",
        icon: "Droplets",
        popular: true,
      },
      {
        id: "duvets-laundry",
        name: "Duvets Cleaning",
        slug: "duvets-laundry",
        description: "Professional duvet washing and care with gentle handling",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Wind",
      },
      {
        id: "curtains-laundry",
        name: "Curtains Cleaning Per Kg",
        slug: "curtains-laundry",
        description: "Curtain cleaning by weight with specialized fabric care",
        pricingModel: "per-kg",
        category: "laundromat",
        icon: "Frame",
      },
      {
        id: "bedsheet-cleaning",
        name: "Bedsheet Cleaning - Piece",
        slug: "bedsheet-cleaning",
        description: "Individual bedsheet cleaning service for fresh, crisp linens",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Layers",
      },
      {
        id: "bed-cover-cleaning",
        name: "Bed Cover Cleaning - Piece",
        slug: "bed-cover-cleaning",
        description: "Bed cover cleaning and care with proper fabric treatment",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Layers",
      },
      {
        id: "pillowcase-cleaning",
        name: "Pillowcase Cleaning Per Piece",
        slug: "pillowcase-cleaning",
        description: "Pillowcase cleaning service for hygienic sleep comfort",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Square",
      },
      {
        id: "towels-cleaning",
        name: "Towels Cleaning",
        slug: "towels-cleaning",
        description: "Towel washing and sanitization for optimal freshness",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Bath",
      },
      {
        id: "dust-coat-cleaning",
        name: "Dust Coat Cleaning Per Piece",
        slug: "dust-coat-cleaning",
        description: "Professional workwear dust coat cleaning",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Shirt",
      },
      {
        id: "overalls-cleaning",
        name: "Overalls Cleaning Per Piece",
        slug: "overalls-cleaning",
        description: "Overall and coverall cleaning service for work clothes",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Shirt",
      },
    ],
  },
  {
    id: "nanny",
    name: "Nanny",
    slug: "nanny",
    description: "Professional childcare placement services",
    icon: "Baby",
    color: "pink",
    services: [
      {
        id: "nanny-monthly",
        name: "Book a Nanny - Monthly",
        slug: "nanny-monthly",
        description: "Standard nanny placement service with background-checked professionals",
        pricingModel: "monthly",
        category: "nanny",
        icon: "UserCheck",
      },
      {
        id: "executive-nanny",
        name: "Book an Executive Nanny - Monthly",
        slug: "executive-nanny",
        description: "Premium experienced nanny placement with specialized skills",
        pricingModel: "monthly",
        category: "nanny",
        icon: "Star",
        popular: true,
      },
    ],
  },
  {
    id: "cleaning-school",
    name: "Cleaning School",
    slug: "cleaning-school",
    description: "Professional training programs for cleaning professionals",
    icon: "GraduationCap",
    color: "emerald",
    services: [
      {
        id: "advance-training",
        name: "Advance Cleaner Training",
        slug: "advance-training",
        description: "Advanced professional cleaning certification program with industry best practices",
        pricingModel: "per-course",
        category: "cleaning-school",
        icon: "Award",
      },
      {
        id: "mama-fua-training",
        name: "Mama Fua Training",
        slug: "mama-fua-training",
        description: "Housekeeper skills and best practices training program",
        pricingModel: "per-course",
        category: "cleaning-school",
        icon: "BookOpen",
      },
    ],
  },
];

/**
 * Get all services flattened from all categories
 */
export function getAllServices() {
  return serviceCategories.flatMap((cat) => cat.services);
}

/**
 * Get only popular/featured services
 */
export function getPopularServices() {
  return getAllServices().filter((service) => service.popular);
}

/**
 * Find a service by its slug
 */
export function getServiceBySlug(slug: string) {
  return getAllServices().find((service) => service.slug === slug);
}

/**
 * Find a category by its slug
 */
export function getCategoryBySlug(slug: string) {
  return serviceCategories.find((cat) => cat.slug === slug);
}

/**
 * Get all services within a specific category
 */
export function getServicesByCategory(categoryId: string) {
  const category = serviceCategories.find((cat) => cat.id === categoryId);
  return category?.services || [];
}

/**
 * Get total service count
 */
export function getTotalServiceCount() {
  return getAllServices().length;
}

/**
 * Get category count
 */
export function getCategoryCount() {
  return serviceCategories.length;
}
