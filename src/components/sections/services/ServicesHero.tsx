import { Container } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { HeroImage } from "@/components/common/OptimizedImage";
import { heroImages } from "@/lib/images";

interface ServicesHeroProps {
  /** Total number of categories */
  categoryCount: number;
  /** Total number of services */
  serviceCount: number;
}

/**
 * Services Page Hero Section with background image and stats
 */
export function ServicesHero({ categoryCount, serviceCount }: ServicesHeroProps) {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <HeroImage
          src={heroImages.services}
          alt="Professional cleaning services"
          className="w-full h-full"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />
      </div>

      <Container className="py-16 md:py-24">
        <div className="text-center text-white space-y-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              Our Services
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Professional Cleaning Services
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in animation-delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            {categoryCount} Categories • {serviceCount}+ Services • Quality You Can Trust
          </p>

          {/* Feature highlights */}
          <div className="animate-fade-in animation-delay-300 flex flex-wrap justify-center gap-6 pt-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Experienced Professionals
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Eco-Friendly Products
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
