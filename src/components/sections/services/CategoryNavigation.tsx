"use client";

import { useEffect, useState } from "react";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCategory } from "@/types/services";
import { cn } from "@/lib/utils";

interface CategoryNavigationProps {
  /** All service categories */
  categories: ServiceCategory[];
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
 * Sticky Category Navigation Bar
 * Allows quick jumping to different service categories
 */
export function CategoryNavigation({ categories }: CategoryNavigationProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Track which category is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((category) => {
      const element = document.getElementById(category.slug);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCategory(category.slug);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [categories]);

  const scrollToCategory = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm"
      aria-label="Service categories"
    >
      {/* Scrollable container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 px-4 py-3 min-w-max mx-auto max-w-7xl">
          {categories.map((category) => {
            const Icon = getIconComponent(category.icon);
            const isActive = activeCategory === category.slug;

            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToCategory(category.slug)}
                className={cn(
                  "flex-shrink-0 gap-2 transition-all duration-200",
                  isActive &&
                  "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">
                  {category.name.split(" ")[0]}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
