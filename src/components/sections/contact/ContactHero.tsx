import { Container } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { HeroImage } from "@/components/common/OptimizedImage";
import { heroImages } from "@/lib/images";

/**
 * Contact Page Hero Section
 */
export function ContactHero() {
  return (
    <section className="relative min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <HeroImage
          src={heroImages.contact}
          alt="Contact Avatar CleanPro"
          className="w-full h-full"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />
      </div>

      <Container className="py-16 md:py-20">
        <div className="text-center text-white space-y-5 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20"
            >
              Contact Us
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Get in Touch
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in animation-delay-200 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for a free quote or any
            questions about our services.
          </p>
        </div>
      </Container>
    </section>
  );
}
