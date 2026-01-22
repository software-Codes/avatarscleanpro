/**
 * Image Registry for Avatar CleanPro
 * Centralized image paths for type-safe imports
 */

// Category Images (600×400 recommended)
export const categoryImages = {
  mamaFua: "/images/mama-fua.jpg",
  fumigation: "/images/fumigation.jpg",
  seatsCarpets: "/images/carpet-cleaning.jpg",
  deepCleaning: "/images/deep-cleaning.jpg",
  airbnb: "/images/airbnb.jpg",
  officeCleaning: "/images/office-cleaning.jpg",
  postConstruction: "/images/construction-cleanup.jpg",
  laundromat: "/images/laundromat.jpg",
  nanny: "/images/nanny.jpg",
  cleaningSchool: "/images/cleaning-school.jpg",
} as const;

// Hero Images (1920×1080 recommended)
export const heroImages = {
  main: "/images/hero-main.jpg",
  services: "/images/services-hero.jpg",
  contact: "/images/contact-hero.jpg",
} as const;

// Logo & Branding (generated dynamically - no files needed)
export const brandAssets = {
  logo: "text-based", // CSS gradient logo component
  ogImage: "/images/hero-main.jpg", // Using main hero for social sharing
} as const;

// Type exports for TypeScript
export type CategoryImageKey = keyof typeof categoryImages;
export type HeroImageKey = keyof typeof heroImages;

/**
 * Get category image path by key
 * @param key - Category image key
 * @returns Image path
 */
export function getCategoryImage(key: CategoryImageKey): string {
  return categoryImages[key];
}

/**
 * Get hero image path by key
 * @param key - Hero image key
 * @returns Image path
 */
export function getHeroImage(key: HeroImageKey): string {
  return heroImages[key];
}

/**
 * Image optimization recommendations:
 * - All images will be automatically optimized by Next.js Image component
 * - Next.js converts to WebP/AVIF automatically at build time
 * - No manual conversion needed!
 * - Use priority prop for above-the-fold images
 * - Use sizes prop for responsive images
 */

// Image size constants
export const imageSizes = {
  category: { width: 600, height: 400 },
  hero: { width: 1920, height: 1080 },
  thumbnail: { width: 300, height: 200 },
  og: { width: 1200, height: 630 },
} as const;
