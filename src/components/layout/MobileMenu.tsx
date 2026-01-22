"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/common/Logo";
import { Navigation } from "./Navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Mobile navigation menu using a slide-out sheet.
 * Includes navigation links, theme toggle, and contact info.
 */
export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const themeAriaLabel = mounted
    ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
    : "Toggle theme";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("lg:hidden", className)}
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader className="text-left">
          <div className="flex items-center justify-between">
            <SheetTitle>
              <Logo variant="compact" asLink={false} />
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-6">
          {/* Navigation Links */}
          <Navigation orientation="vertical" onLinkClick={handleLinkClick} />

          <Separator />

          {/* CTA Button */}
          <Button
            asChild
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            onClick={handleLinkClick}
          >
            <a href="/contact">Get Free Quote</a>
          </Button>

          <Separator />

          {/* Theme Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Theme
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="gap-2"
              aria-label={themeAriaLabel}
            >
              {mounted && (
                <>
                  {resolvedTheme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      Light
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      Dark
                    </>
                  )}
                </>
              )}
            </Button>
          </div>

          <Separator />

          {/* Contact Info */}
          <div className="space-y-3 text-sm">
            <h3 className="font-medium text-foreground">Contact Us</h3>
            <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
            <p className="text-muted-foreground">{siteConfig.contact.email}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
