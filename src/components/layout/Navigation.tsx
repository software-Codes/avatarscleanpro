"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/** Navigation link configuration */
export interface NavLink {
  href: string;
  label: string;
}

/** Main navigation links */
export const navigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

interface NavigationProps {
  /** Additional CSS classes */
  className?: string;
  /** Callback when a link is clicked (useful for closing mobile menu) */
  onLinkClick?: () => void;
  /** Orientation of the navigation */
  orientation?: "horizontal" | "vertical";
}

/**
 * Navigation component with animated active state indicators.
 * Supports both horizontal (desktop) and vertical (mobile) layouts.
 */
export function Navigation({
  className,
  onLinkClick,
  orientation = "horizontal",
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "flex",
        orientation === "horizontal" && "items-center gap-1",
        orientation === "vertical" && "flex-col gap-1",
        className
      )}
    >
      {navigationLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              // Base styles
              "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
              // Hover state
              "hover:text-primary",
              // Active state
              isActive ? "text-primary" : "text-muted-foreground",
              // Touch-friendly targets on mobile
              orientation === "vertical" &&
                "w-full min-h-[44px] flex items-center text-base",
              // Horizontal specific
              orientation === "horizontal" && "rounded-md"
            )}
          >
            {link.label}
            {/* Active indicator - animated underline for horizontal */}
            {isActive && orientation === "horizontal" && (
              <span
                className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                aria-hidden="true"
              />
            )}
            {/* Active indicator - left bar for vertical */}
            {isActive && orientation === "vertical" && (
              <span
                className="absolute left-0 top-1/2 h-1/2 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-primary to-accent transition-all duration-300"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
