"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { Logo } from "@/components/common/Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Site header component with sticky behavior, backdrop blur, and theme toggle.
 * Features responsive navigation that switches between desktop and mobile layouts.
 */
export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid hydration mismatch for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const themeAriaLabel = mounted
    ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`
    : "Toggle theme";

  return (
    <header
      className={cn(
        // Base styles
        "sticky top-0 z-50 w-full transition-all duration-300",
        // Scrolled state - add background blur and shadow
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent",
        className
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Logo variant="compact" className="lg:hidden" />
          <Logo variant="default" className="hidden lg:flex" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Navigation orientation="horizontal" />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={themeAriaLabel}
              className="text-muted-foreground hover:text-foreground"
            >
              {mounted && (
                <>
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5 transition-transform hover:rotate-45" />
                  ) : (
                    <Moon className="h-5 w-5 transition-transform hover:-rotate-12" />
                  )}
                </>
              )}
            </Button>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              <a href="/contact" className="gap-2">
                <Phone className="h-4 w-4" />
                Get Quote
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={themeAriaLabel}
              className="text-muted-foreground hover:text-foreground"
            >
              {mounted && (
                <>
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </>
              )}
            </Button>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
