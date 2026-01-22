import { Container } from "@/components/layout";
import { siteConfig } from "@/config/site";

/**
 * Google Map Embed Component
 * Displays an embedded Google Map with responsive sizing
 */
export function GoogleMap() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
            Find Us
          </h2>
          <p className="text-muted-foreground">
            Visit our location in {siteConfig.contact.address}
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-xl overflow-hidden shadow-lg border border-border/50">
          <iframe
            src={siteConfig.googleMapsEmbed}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Avatar CleanPro Location"
            className="w-full h-[200px] md:h-[300px] lg:h-[400px]"
          />
        </div>
      </Container>
    </section>
  );
}
