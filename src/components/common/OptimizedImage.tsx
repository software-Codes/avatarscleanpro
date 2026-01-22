import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/**
 * Optimized Image Component
 * 
 * Automatically handles:
 * - WebP/AVIF conversion
 * - Responsive sizing
 * - Lazy loading
 * - Blur placeholder
 * 
 * Next.js will automatically:
 * 1. Convert large JPG to WebP/AVIF at request time
 * 2. Resize based on device
 * 3. Cache optimized versions
 * 
 * No manual conversion needed!
 */
export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("object-cover", className)}
      priority={priority}
      quality={85}
      {...props}
    />
  );
}

/**
 * Category Image Component
 * Pre-configured for service category cards
 */
interface CategoryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function CategoryImage({ src, alt, className }: CategoryImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={600}
      height={400}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className={className}
    />
  );
}

/**
 * Hero Image Component
 * Pre-configured for hero sections
 */
interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function HeroImage({ src, alt, className, priority = true }: HeroImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      sizes="100vw"
      priority={priority}
      className={className}
    />
  );
}
