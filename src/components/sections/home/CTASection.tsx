import Link from "next/link";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";

/**
 * Call to Action Section at the bottom of the home page.
 * Encourages visitors to get in touch with a prominent CTA.
 */
export function CTASection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container>
        <div className="relative text-center text-white">
          {/* Icon */}
          <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
            <Sparkles className="h-8 w-8 md:h-10 md:w-10" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Ready for a Cleaner Space?
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Get in touch today for a free quote. Our team is ready to help you
            achieve the spotless environment you deserve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-colors shadow-lg gap-2 min-h-[52px] text-base md:text-lg"
            >
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                Get Your Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 transition-colors min-h-[52px] text-base md:text-lg group"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No obligation quote
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Quick response
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Satisfaction guaranteed
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
