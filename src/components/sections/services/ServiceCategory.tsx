import * as LucideIcons from "lucide-react";
import { Container } from "@/components/layout";
import { ServiceCard } from "./ServiceCard";
import { ServiceCategory as ServiceCategoryType } from "@/types/services";
import { cn } from "@/lib/utils";

interface ServiceCategoryProps {
  /** Category data with services */
  category: ServiceCategoryType;
}

/**
 * Get icon component from lucide-react by string name
 */
function getIconComponent(iconName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent || LucideIcons.Sparkles;
}

/**
 * Service Category Section Component
 * Displays a category header with description and grid of service cards
 */
export function ServiceCategory({ category }: ServiceCategoryProps) {
  const Icon = getIconComponent(category.icon);

  return (
    <section id={category.slug} className="scroll-mt-20 py-12 md:py-16">
      <Container>
        {/* Category Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-4 mb-4">
            {/* Icon */}
            <div
              className={cn(
                "p-3 rounded-xl bg-primary/10 text-primary",
                "shadow-sm"
              )}
            >
              <Icon className="h-6 w-6 md:h-7 md:w-7" />
            </div>

            {/* Category name and count */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">
                {category.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {category.services.length} service{category.services.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>

          {/* Category description */}
          <p className="text-base text-muted-foreground max-w-3xl">
            {category.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {category.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
