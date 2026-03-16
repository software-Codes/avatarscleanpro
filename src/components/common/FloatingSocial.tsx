"use client";

import { useState } from "react";
import { MessageCircle, X, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "./SocialLinks";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Floating social media widget that provides quick access to social channels
 * and WhatsApp contact. Responsive design with collapsible interface.
 */
export function FloatingSocial() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello Avatar CleanPro! 👋 I'm interested in your cleaning services."
    );
    const phoneNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Social Links - Show when expanded */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isExpanded
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-2xl p-4 shadow-lg">
          <div className="flex flex-col gap-2 min-w-[200px]">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Connect with us
            </h4>
            <SocialLinks variant="contact" className="flex-col gap-2" />
          </div>
        </div>
      </div>

      {/* Main Action Buttons */}\n      <div className="flex flex-col gap-2">
        {/* WhatsApp Button */}
        <Button
          onClick={handleWhatsAppClick}
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          size="icon"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* Toggle Social Links Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
            isExpanded
              ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              : "bg-primary hover:bg-primary/90 text-primary-foreground"
          )}
          size="icon"
          aria-label={isExpanded ? "Close social links" : "Show social links"}
        >
          {isExpanded ? (
            <X className="h-5 w-5" />
          ) : (
            <Share2 className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}