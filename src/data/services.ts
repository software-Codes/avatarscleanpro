import { ServiceCategory } from "@/types/services";

/**
 * Complete service categories and offerings for Avatar CleanPro
 * 10 categories with 35+ individual services
 */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "fumigation",
    name: "Fumigation",
    slug: "fumigation",
    description: "Professional pest control and fumigation services for homes and offices. We use safe, eco-friendly chemicals and advanced techniques to eliminate all types of pests including bedbugs, cockroaches, ants, termites, and rodents. Our certified technicians ensure complete pest eradication while maintaining the safety of your family and pets.",
    icon: "Bug",
    color: "orange",
    services: [
      {
        id: "fumigation-bedroom",
        name: "Fumigation Per Bedroom",
        slug: "fumigation-bedroom",
        description: "Comprehensive pest elimination treatment for bedrooms using industry-leading, non-toxic fumigation methods. Our service includes thorough inspection, targeted treatment of infested areas, preventive measures, and follow-up visits to ensure complete eradication. We guarantee 100% elimination of bedbugs, cockroaches, ants, and other common household pests while ensuring your bedroom remains safe for sleeping.",
        pricingModel: "per-bedroom",
        category: "fumigation",
        icon: "Shield",
      },
    ],
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description: "Intensive top-to-bottom cleaning for thorough sanitation and hygiene. Our deep cleaning service goes beyond regular cleaning to tackle hidden dirt, grime, and bacteria in hard-to-reach places. We use professional-grade equipment and eco-friendly cleaning products to sanitize every surface, ensuring your space is not just clean but truly hygienic and healthy.",
    icon: "Sparkles",
    color: "blue",
    services: [
      {
        id: "deep-cleaning-bedroom",
        name: "Deep Cleaning Per Bedroom",
        slug: "deep-cleaning-bedroom",
        description: "Comprehensive deep cleaning service covering every corner of your bedroom including baseboards, light fixtures, ceiling fans, inside closets, under furniture, and behind appliances. We sanitize all surfaces, clean windows inside and out, vacuum and mop thoroughly, and eliminate dust, allergens, and bacteria. Perfect for seasonal cleaning, moving in/out, or maintaining a healthy living environment.",
        pricingModel: "per-bedroom",
        category: "deep-cleaning",
        icon: "Sparkles",
        popular: true,
      },
    ],
  },
  {
    id: "seats-carpets",
    name: "Seats & Carpets",
    slug: "seats-carpets",
    description: "Specialized upholstery and fabric cleaning services using advanced steam cleaning and dry cleaning techniques. We restore the original beauty of your furniture, carpets, and fabrics while removing deep-seated dirt, stains, odors, and allergens. Our certified technicians use eco-friendly products safe for children and pets, extending the life of your valuable furnishings.",
    icon: "Sofa",
    color: "purple",
    services: [
      {
        id: "bed-cleaning",
        name: "Bed Cleaning Per Piece",
        slug: "bed-cleaning",
        description: "Professional deep cleaning for beds and bed frames including headboards, footboards, and under-bed areas. We remove dust mites, allergens, and accumulated dirt while sanitizing all surfaces. Our service includes cleaning of bed slats, springs, and frame joints, ensuring your sleeping area is completely hygienic and fresh.",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Bed",
      },
      {
        id: "carpet-cleaning",
        name: "Carpet Cleaning Per Piece",
        slug: "carpet-cleaning",
        description: "Professional carpet deep cleaning and stain removal using hot water extraction and advanced cleaning solutions. We eliminate embedded dirt, pet odors, food stains, and allergens while restoring carpet texture and color. Our process includes pre-treatment, deep steam cleaning, stain protection application, and fast-drying techniques to minimize disruption to your daily routine.",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "LayoutGrid",
        popular: true,
      },
      {
        id: "curtain-cleaning",
        name: "Curtain Cleaning Per Piece",
        slug: "curtain-cleaning",
        description: "Thorough curtain and drape cleaning service including dust removal, stain treatment, and fabric restoration. We handle all types of curtains from delicate sheers to heavy drapes, using appropriate cleaning methods for each fabric type. Service includes takedown, professional cleaning, pressing, and rehang with attention to proper pleating and alignment.",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Frame",
      },
      {
        id: "mattress-cleaning",
        name: "Mattress Cleaning Per Piece",
        slug: "mattress-cleaning",
        description: "Professional mattress sanitization and stain removal service that eliminates dust mites, bacteria, allergens, and odors. Using specialized UV sanitization and steam cleaning techniques, we deep clean your mattress without soaking it. Our service includes spot treatment for stains, deodorization, and antimicrobial protection, ensuring a healthier sleep environment.",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Bed",
        popular: true,
      },
      {
        id: "seat-cleaning",
        name: "Seat Cleaning Per Seater",
        slug: "seat-cleaning",
        description: "Professional sofa and chair upholstery cleaning using fabric-specific techniques and eco-friendly solutions. We remove deep-seated dirt, pet hair, food stains, and odors while preserving fabric integrity and color. Our service includes pre-inspection, spot treatment, deep cleaning, fabric protection, and post-cleaning grooming to restore your furniture's original appearance.",
        pricingModel: "per-seater",
        category: "seats-carpets",
        icon: "Armchair",
        popular: true,
      },
    ],
  },
  {
    id: "mama-fua",
    name: "Mama Fua (Housekeeper)",
    slug: "mama-fua",
    description: "Comprehensive household services including cleaning, childcare, and laundry assistance provided by trained and vetted professionals. Our Mama Fua services combine traditional household management with modern standards of hygiene and childcare, offering reliable support for busy families who need trusted help with daily household tasks.",
    icon: "Home",
    color: "teal",
    services: [
      {
        id: "duvet-hand-wash",
        name: "Duvet (Hand Wash)",
        slug: "duvet-hand-wash",
        description: "Professional hand washing of duvets with specialized care and attention to fabric type and filling material. Our gentle hand-washing process preserves the duvet's loft, warmth, and durability while removing allergens, dust mites, and odors. We use hypoallergenic detergents and ensure proper drying to prevent mold and maintain fluffiness.",
        pricingModel: "per-piece",
        category: "mama-fua",
        icon: "Wind",
      },
      {
        id: "folding",
        name: "Folding Per Basket",
        slug: "folding",
        description: "Professional laundry folding and organizing service that transforms your clean clothes into neatly arranged, closet-ready items. Our trained staff carefully fold each garment using proper techniques to minimize wrinkles, organize by type and size, and arrange everything in baskets or directly in your closet according to your preferences.",
        pricingModel: "per-basket",
        category: "mama-fua",
        icon: "FolderOpen",
      },
      {
        id: "baby-sitting",
        name: "Baby Sitting Per Hour",
        slug: "baby-sitting",
        description: "Trusted and reliable childcare services provided by trained, background-checked professionals with experience in child development and safety. Our babysitters engage children in age-appropriate activities, ensure their safety and well-being, assist with meals and bedtime routines, and provide parents with peace of mind during their absence.",
        pricingModel: "per-hour",
        category: "mama-fua",
        icon: "Baby",
        popular: true,
      },
      {
        id: "daybug",
        name: "Daybug Per Hour",
        slug: "daybug",
        description: "Daytime household assistance and support services including light cleaning, meal preparation, laundry assistance, and general household organization. Our daybug service provides flexible hourly support for busy households, helping with daily tasks that keep your home running smoothly while you focus on other priorities.",
        pricingModel: "per-hour",
        category: "mama-fua",
        icon: "Clock",
      },
      {
        id: "house-cleaning",
        name: "House Cleaning Per Room",
        slug: "house-cleaning",
        description: "Thorough room-by-room cleaning service covering all areas including dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and trash removal. Our systematic approach ensures every corner is addressed, from baseboards to ceiling fans, creating a consistently clean and healthy living environment throughout your home.",
        pricingModel: "per-room",
        category: "mama-fua",
        icon: "Sparkles",
        popular: true,
      },
      {
        id: "ironing",
        name: "Ironing Per Basket",
        slug: "ironing",
        description: "Professional ironing services for wrinkle-free, crisp clothes using commercial-grade equipment and proper techniques for different fabric types. We handle everything from delicate silks to heavy cottons, ensuring proper temperature settings, steam application, and finishing touches that give your garments a professional, polished appearance.",
        pricingModel: "per-basket",
        category: "mama-fua",
        icon: "Shirt",
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
