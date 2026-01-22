import { Users, Star, Shield, Leaf } from "lucide-react";
import { Container } from "@/components/layout";

/** Trust indicator data */
const indicators = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
    description: "Satisfied clients",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Star Rating",
    description: "Customer reviews",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Satisfaction",
    description: "Guaranteed quality",
  },
  {
    icon: Leaf,
    value: "Eco",
    label: "Friendly",
    description: "Safe products",
  },
];

/**
 * Trust Indicators Section displaying key stats and achievements.
 * Shows social proof to build customer confidence.
 */
export function TrustIndicators() {
  return (
    <section className="py-12 md:py-16 border-y border-border/50 bg-muted/30">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {indicators.map((indicator, index) => (
            <div
              key={indicator.label}
              className="flex flex-col items-center text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-3 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <indicator.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>

              {/* Value */}
              <div className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                {indicator.value}
              </div>

              {/* Label */}
              <div className="text-sm md:text-base font-medium text-foreground mt-1">
                {indicator.label}
              </div>

              {/* Description */}
              <div className="text-xs md:text-sm text-muted-foreground mt-0.5">
                {indicator.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
