import Link from "next/link";
import {
  Home,
  Sparkles,
  Sofa,
  Shirt,
  Building2,
  Baby,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { categoryImages, imageSizes } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Featured service categories */
const featuredServices = [
  {
    id: "mama-fua",
    name: "Mama Fua",
    description: "Comprehensive household services including cleaning, childcare, and laundry assistance",
    icon: Home,
    color: "primary",
    serviceCount: 6,
    imageSrc: categoryImages.mamaFua,
  },
  {
    id: "seats-carpets",
    name: "Seats & Carpets",
    description: "Specialized upholstery, carpet, and curtain cleaning services",
    icon: Sofa,
    color: "accent",
    serviceCount: 5,
    imageSrc: categoryImages.seatsCarpets,
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    description: "Intensive top-to-bottom cleaning for thorough sanitation",
    icon: Sparkles,
    color: "secondary",
    serviceCount: 1,
    imageSrc: categoryImages.deepCleaning,
  },
  {
    id: "laundromat",
    name: "Laundromat",
    description: "Complete laundry and garment care with professional handling",
    icon: Shirt,
    color: "primary",
    serviceCount: 9,
    imageSrc: categoryImages.laundromat,
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    description: "Professional cleaning solutions for workplaces and commercial spaces",
    icon: Building2,
    color: "accent",
    serviceCount: 2,
    imageSrc: categoryImages.officeCleaning,
  },
  {
    id: "nanny",
    name: "Nanny Services",
    description: "Professional childcare placement for families",
    icon: Baby,
    color: "secondary",
    serviceCount: 2,
    imageSrc: categoryImages.nanny,
  },
];

/** Color configuration type */
interface ColorConfig {
  bg: string;
  text: string;
  hover: string;
}

/** Color classes for service cards */
const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    hover: "group-hover:bg-primary/20",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    hover: "group-hover:bg-accent/20",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    hover: "group-hover:bg-secondary/20",
  },
} satisfies Record<string, ColorConfig>;

/** Default color configuration */
const defaultColor: ColorConfig = colorClasses.primary;

/** Get color classes based on color name */
function getColorClasses(color: string): ColorConfig {
  return colorClasses[color as keyof typeof colorClasses] ?? defaultColor;
}

/**
 * Services Overview Section showing featured service categories.
 * Links to full services page for detailed information.
 */
export function ServicesOverview() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-muted/50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your needs. Choose from
            our 10 service categories with 35+ individual services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredServices.map((service, index) => {
            const colors = getColorClasses(service.color);

            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="block group"
              >
                <Card
                  className={cn(
                    "h-full transition-all duration-300",
                    "hover:shadow-lg hover:-translate-y-1",
                    "border-transparent hover:border-border"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl">
                      <OptimizedImage
                        src={service.imageSrc}
                        alt={`${service.name} service`}
                        width={imageSizes.category.width}
                        height={imageSizes.category.height}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>

                    <div className="p-6">
                    {/* Icon and Service Count */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={cn(
                          "p-3 rounded-xl transition-colors duration-300",
                          colors.bg,
                          colors.hover
                        )}
                      >
                        <service.icon className={cn("h-6 w-6", colors.text)} />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {service.serviceCount} services
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/services">
              View All 10 Categories
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
