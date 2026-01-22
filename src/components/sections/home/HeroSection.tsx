import Link from "next/link";
import { Sparkles, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { OptimizedImage } from "@/components/common/OptimizedImage";
import { heroImages, imageSizes } from "@/lib/images";

/**
 * Hero Section for the home page.
 * Features animated text, gradient background, and prominent CTAs.
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Hero image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroImages.main}
            alt="Professional cleaning service"
            width={imageSizes.hero.width}
            height={imageSizes.hero.height}
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/60 to-background/90 dark:from-background/80 dark:via-background/60 dark:to-background/95" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container className="py-12 md:py-20 lg:py-28">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Trusted by 500+ Happy Customers
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-in animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight max-w-4xl">
            Professional Cleaning Services{" "}
            <span className="text-gradient">You Can Trust</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in animation-delay-200 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl">
            From household cleaning to nanny services, we deliver quality
            solutions with trusted, experienced professionals.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up animation-delay-300 flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg hover:shadow-xl gap-2 min-h-[52px]"
            >
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                Get Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base md:text-lg group min-h-[52px]"
            >
              <Link href="/services">
                View Services
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="animate-fade-in animation-delay-400 flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>10 Service Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>35+ Services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Eco-Friendly Products</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
