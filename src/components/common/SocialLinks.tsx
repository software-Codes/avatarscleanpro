"use client";

import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

// TikTok icon component (since it's not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface SocialLinksProps {
  /** Visual variant for different contexts */
  variant?: "default" | "footer" | "contact";
  /** Additional CSS classes */
  className?: string;
  /** Show labels next to icons */
  showLabels?: boolean;
}

/**
 * Social media links component with proper icons and hover effects.
 * Responsive design with different variants for various contexts.
 */
export function SocialLinks({ 
  variant = "default", 
  className,
  showLabels = false 
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: "Facebook",
      href: siteConfig.links.facebook,
      icon: Facebook,
      color: "hover:text-[#1877F2]",
      bgColor: "hover:bg-[#1877F2]/10",
    },
    {
      name: "Instagram", 
      href: siteConfig.links.instagram,
      icon: Instagram,
      color: "hover:text-[#E4405F]",
      bgColor: "hover:bg-[#E4405F]/10",
    },
    {
      name: "WhatsApp",
      href: siteConfig.links.whatsapp,
      icon: MessageCircle,
      color: "hover:text-[#25D366]",
      bgColor: "hover:bg-[#25D366]/10",
    },
    {
      name: "TikTok",
      href: siteConfig.links.tiktok,
      icon: TikTokIcon,
      color: "hover:text-[#000000] dark:hover:text-[#ffffff]",
      bgColor: "hover:bg-black/10 dark:hover:bg-white/10",
    },
    {
      name: "LinkedIn",
      href: siteConfig.contact.Linkedin,
      icon: Linkedin,
      color: "hover:text-[#0A66C2]",
      bgColor: "hover:bg-[#0A66C2]/10",
    },
  ];

  const baseClasses = cn(
    "flex items-center gap-3",
    variant === "contact" && "flex-wrap",
    variant === "footer" && "gap-4",
    className
  );

  const linkClasses = cn(
    "text-muted-foreground transition-all duration-200 flex items-center gap-2",
    variant === "default" && "p-2 rounded-full hover:scale-110",
    variant === "footer" && "p-2 rounded-full hover:scale-110", 
    variant === "contact" && "p-3 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-sm min-w-[120px] justify-center sm:justify-start"
  );

  const iconSize = cn(
    variant === "contact" ? "h-5 w-5" : "h-5 w-5"
  );

  return (
    <div className={baseClasses}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(linkClasses, social.color, social.bgColor)}
            aria-label={`Follow us on ${social.name}`}
            title={`Follow us on ${social.name}`}
          >
            <Icon className={iconSize} />
            {(showLabels || variant === "contact") && (
              <span className={cn(
                "text-sm font-medium",
                variant === "contact" && "hidden sm:inline"
              )}>
                {social.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}