import { Container } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/common/OptimizedImage";
import { heroImages } from "@/lib/images";
import { Phone, ArrowDown } from "lucide-react";
import Link from "next/link";

interface ServicesHeroProps {
  /** Total number of categories */
  categoryCount: number;
  /** Total number of services */
  serviceCount: number;
}

/**
 * Services Page Hero Section with background image, stats, and enhanced visuals
 */
export function ServicesHero({ categoryCount, serviceCount }: ServicesHeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <HeroImage
          src={heroImages.services}
          alt="Professional cleaning services - Avatar CleanPro team at work"
          className="w-full h-full object-cover object-center"
          priority
        />
        
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <Container className="py-16 md:py-24 lg:py-32">
        <div className="text-center text-white space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="bg-white/15 text-white backdrop-blur-sm border-white/30 hover:bg-white/25 transition-all duration-300 text-sm px-4 py-2"
            >
              ✨ Our Professional Services
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in animation-delay-100 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight">
              Professional Cleaning
              <span className="block text-gradient bg-gradient-to-r from-white via-primary-foreground to-accent-foreground bg-clip-text text-transparent">
                Services
              </span>
            </h1>
          </div>

          {/* Enhanced Subheading with Stats */}
          <div className="animate-fade-in animation-delay-200 space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Trusted by hundreds of satisfied customers across Nairobi
            </p>
            
            {/* Stats Cards */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{categoryCount}</div>
                <div className="text-sm md:text-base text-white/80">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{serviceCount}+</div>
                <div className="text-sm md:text-base text-white/80">Services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 md:px-6 md:py-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-sm md:text-base text-white/80">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in animation-delay-300 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg hover:shadow-xl gap-2 text-base md:text-lg px-8 py-6"
            >
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="animate-fade-in animation-delay-400 flex flex-wrap justify-center gap-6 md:gap-8 pt-8 text-sm md:text-base text-white/80">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Experienced Professionals</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Eco-Friendly Products</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <ArrowDown className="w-3 h-3 text-white/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
