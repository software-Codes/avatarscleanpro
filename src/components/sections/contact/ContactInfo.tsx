"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Generate WhatsApp link with pre-filled message
 */
function getWhatsAppLink(message: string): string {
  // Extract phone number from whatsapp link or use configured number
  // The wa.me/qr/ link is a QR code link, for direct messaging we need the phone number
  const phoneNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

const defaultWhatsAppMessage = `Hello Avatar CleanPro! 👋

I'm interested in your cleaning services. I would like to inquire about:

• Service type: [Please specify]
• Location: [Your location]
• Preferred date: [Your preferred date]

Looking forward to hearing from you!`;

/**
 * Contact Information Component
 * Displays business contact details with icons and WhatsApp integration
 */
export function ContactInfo() {
  const handleWhatsAppClick = () => {
    window.open(getWhatsAppLink(defaultWhatsAppMessage), "_blank");
  };

  return (
    <Card className="h-full border-border/50">
      <CardContent className="p-6 md:p-8 space-y-8">
        {/* Section title */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-2">
            Contact Information
          </h2>
          <p className="text-muted-foreground">
            Reach out through any of these channels
          </p>
        </div>

        {/* Contact details */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Address</h3>
              <p className="text-muted-foreground">{siteConfig.contact.address}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Business Hours</h3>
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Mon - Fri: {siteConfig.businessHours.weekdays}</p>
                <p>Saturday: {siteConfig.businessHours.saturday}</p>
                <p>Sunday: {siteConfig.businessHours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Prefer to chat? Send us a message on WhatsApp for quick responses!
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md"
            size="lg"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
