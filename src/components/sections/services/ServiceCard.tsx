import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Service } from "@/types/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  /** Service data */
  service: Service;
  /** Card variant */
  variant?: "default" | "compact";
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
 * Format pricing model text for display
 */
function formatPricingModel(model: string): string {
  const formats: Record<string, string> = {
    "per-piece": "Per Piece",
    "per-room": "Per Room",
    "per-hour": "Per Hour",
    "per-kg": "Per Kg",
    "per-seater": "Per Seater",
    "per-bedroom": "Per Bedroom",
    "per-basket": "Per Basket",
    "monthly": "Monthly",
    "per-course": "Per Course",
    "per-project": "Per Project",
  };
  return formats[model] || model;
}

/**
 * Individual Service Card Component
 * Displays service information with icon, pricing model, and CTA
 */
export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const Icon = getIconComponent(service.icon);

  return (
    <Card
      className={cn(
        "group relative h-full flex flex-col",
        "transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        "border-border/50 hover:border-primary/30"
      )}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute top-3 right-3 z-10">
          <Badge
            variant="secondary"
            className="bg-secondary text-secondary-foreground gap-1 shadow-sm"
          >
            <Star className="h-3 w-3 fill-current" />
            Popular
          </Badge>
        </div>
      )}

      <CardHeader className={cn(variant === "compact" ? "p-4" : "p-6")}>
        {/* Icon */}
        <div className="mb-3 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 w-fit">
          <Icon className="h-6 w-6" />
        </div>

        {/* Service name */}
        <h3
          className={cn(
            "font-heading font-semibold group-hover:text-primary transition-colors",
            variant === "compact" ? "text-base" : "text-lg"
          )}
        >
          {service.name}
        </h3>

        {/* Pricing model */}
        <p className="text-xs text-muted-foreground">
          {formatPricingModel(service.pricingModel)}
        </p>
      </CardHeader>

      <CardContent className={cn("flex-1", variant === "compact" ? "px-4 pb-4" : "px-6 pb-6")}>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </CardContent>

      <CardFooter className={cn(variant === "compact" ? "p-4 pt-0" : "p-6 pt-0")}>
        <Button
          asChild
          variant="ghost"
          className="w-full group/btn justify-between"
        >
          <Link href="/contact">
            Get Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
