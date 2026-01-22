"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Logo variant for different contexts */
  variant?: "default" | "compact" | "footer";
  /** Additional CSS classes */
  className?: string;
  /** Whether to render as a link to home */
  asLink?: boolean;
}

/**
 * Brand logo component with multiple variants for different contexts.
 * Features animated sparkle icon and gradient text.
 */
export function Logo({ variant = "default", className, asLink = true }: LogoProps) {
  const logoContent = (
    <div
      className={cn(
        "group flex items-center gap-2 transition-opacity hover:opacity-90",
        className
      )}
    >
      {/* Icon Badge */}
      {variant !== "compact" && (
        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md transition-transform duration-300 group-hover:scale-105">
          <Sparkles className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
        </div>
      )}

      {/* Text */}
      <div
        className={cn(
          "flex flex-col",
          variant === "compact" && "flex-row items-center gap-1"
        )}
      >
        <span
          className={cn(
            "font-heading font-bold leading-tight tracking-tight",
            variant === "default" && "text-xl",
            variant === "compact" && "text-lg",
            variant === "footer" && "text-2xl"
          )}
        >
          <span className="text-foreground">Avatar</span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CleanPro
          </span>
        </span>

        {variant === "footer" && (
          <span className="text-sm text-muted-foreground">
            Professional Cleaning Services
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="Avatar CleanPro - Home">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
