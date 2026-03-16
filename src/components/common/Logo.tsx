"use client";

import Link from "next/link";
import Image from "next/image";
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
 * Brand logo component with responsive image logo.
 * Features hover effects and different sizes for various contexts.
 */
export function Logo({ variant = "default", className, asLink = true }: LogoProps) {
  const logoContent = (
    <div
      className={cn(
        "group flex items-center transition-opacity hover:opacity-90",
        className
      )}
    >
      <Image
        src="/images/cleanpro-logo.jpg"
        alt="Avatar CleanPro - Professional Cleaning Services"
        width={variant === "compact" ? 40 : variant === "footer" ? 64 : 56}
        height={variant === "compact" ? 40 : variant === "footer" ? 64 : 56}
        className={cn(
          "rounded-full object-cover transition-transform duration-300 group-hover:scale-105 shadow-md",
          variant === "compact" && "h-8 w-8 sm:h-10 sm:w-10",
          variant === "default" && "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14",
          variant === "footer" && "h-12 w-12 sm:h-16 sm:w-16"
        )}
        priority={variant !== "footer"}
      />
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
