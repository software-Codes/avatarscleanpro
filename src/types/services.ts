/**
 * Service Types for Avatar CleanPro
 * Type definitions for service categories and individual services
 */

/** Pricing model types */
export type PricingModel =
  | "per-piece"
  | "per-room"
  | "per-hour"
  | "per-kg"
  | "per-seater"
  | "per-bedroom"
  | "per-basket"
  | "monthly"
  | "per-course"
  | "per-project";

/** Individual service */
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  pricingModel: PricingModel;
  category: string;
  image?: string;
  icon: string;
  popular?: boolean;
}

/** Service category grouping multiple services */
export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  services: Service[];
}

/** Valid service category IDs */
export type ServiceCategoryId =
  | "mama-fua"
  | "fumigation"
  | "seats-carpets"
  | "deep-cleaning"
  | "airbnb-management"
  | "office-cleaning"
  | "post-construction"
  | "laundromat"
  | "nanny"
  | "cleaning-school";
