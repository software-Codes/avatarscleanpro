import {
  Award,
  Clock,
  Leaf,
  Shield,
  ThumbsUp,
  Wallet,
} from "lucide-react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

/** Benefits/features data */
const benefits = [
  {
    icon: Award,
    title: "Experienced Staff",
    description:
      "Our team is professionally trained with years of experience in the cleaning industry.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description:
      "We use environmentally safe cleaning products that are gentle yet effective.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description:
      "Not satisfied? We'll re-clean for free. Your happiness is our priority.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book services at times that work for you. We adapt to your busy schedule.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    description:
      "Quality service at fair prices. No hidden fees, transparent pricing always.",
  },
  {
    icon: ThumbsUp,
    title: "Trusted by 500+",
    description:
      "Join hundreds of satisfied customers who trust us with their homes and offices.",
  },
];

/**
 * Why Choose Us Section highlighting key benefits and differentiators.
 * Uses a grid layout with icons and descriptions.
 */
export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">
            Why Avatar CleanPro
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We go beyond cleaning to deliver an experience that exceeds
            expectations every single time.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "group relative p-6 rounded-2xl",
                "bg-card border border-border/50",
                "hover:border-primary/30 hover:shadow-lg",
                "transition-all duration-300"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
