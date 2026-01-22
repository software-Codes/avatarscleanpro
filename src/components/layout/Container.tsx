import { cn } from "@/lib/utils";

interface ContainerProps {
  /** Child elements to render within the container */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** HTML element to render as - defaults to div */
  as?: "div" | "section" | "article" | "main";
}

/**
 * Container component for consistent max-width and padding across the site.
 * Uses responsive padding that adjusts based on screen size.
 */
export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        "max-w-7xl", // 1280px max width
        className
      )}
    >
      {children}
    </Component>
  );
}
