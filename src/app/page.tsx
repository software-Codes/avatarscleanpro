import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout";
import { Sparkles, Home, Shirt, Baby, ArrowRight, CheckCircle2, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Fully Responsive with animations */}
      <section className="relative flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
        
        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            {/* Animated Hero Text */}
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
                <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
                <span className="text-foreground">Avatar</span>
                <span className="text-gradient">CleanPro</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl animate-fade-in animation-delay-100">
              Professional Cleaning Services You Can Trust
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-fade-in animation-delay-200">
              From household cleaning to nanny services, we provide quality solutions 
              tailored to your needs with trusted, experienced professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-slide-up animation-delay-300">
              <Button 
                asChild
                size="lg" 
                className="text-base md:text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg gap-2"
              >
                <Link href="/contact">
                  <Phone className="h-5 w-5" />
                  Get Free Quote
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="text-base md:text-lg group"
              >
                <Link href="/services">
                  View Services
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2 justify-center mt-6 animate-fade-in animation-delay-400">
              <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                10 Service Categories
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                35+ Services
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm px-3 py-1">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Trusted Professionals
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview - Responsive Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/50">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning solutions for every need, delivered by 
              experienced and trusted professionals.
            </p>
          </div>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">Mama Fua</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive household services including cleaning, childcare, and laundry
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Shirt className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-heading">Laundromat</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete laundry and garment care services with professional handling
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Baby className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-heading">Nanny Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional childcare placement services for families
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/services">
                View All 10 Categories
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Phase 2 Development Status */}
      <section className="py-8 md:py-12 bg-primary/5 dark:bg-primary/10">
        <Container className="max-w-4xl">
          <div className="text-center space-y-4">
            <h3 className="text-lg md:text-xl font-heading font-semibold text-primary">
              Phase 2 Complete: Layout & Navigation
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Responsive header, footer, dark mode, and accessibility features implemented
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
              <div className="p-4 bg-background rounded-lg border shadow-sm">
                <div className="font-semibold text-xs text-primary">Header</div>
                <div className="text-muted-foreground text-xs">Sticky + Blur</div>
              </div>
              <div className="p-4 bg-background rounded-lg border shadow-sm">
                <div className="font-semibold text-xs text-primary">Footer</div>
                <div className="text-muted-foreground text-xs">Responsive</div>
              </div>
              <div className="p-4 bg-background rounded-lg border shadow-sm">
                <div className="font-semibold text-xs text-primary">Navigation</div>
                <div className="text-muted-foreground text-xs">Desktop + Mobile</div>
              </div>
              <div className="p-4 bg-background rounded-lg border shadow-sm">
                <div className="font-semibold text-xs text-primary">Dark Mode</div>
                <div className="text-muted-foreground text-xs">System Pref</div>
              </div>
              <div className="p-4 bg-background rounded-lg border shadow-sm">
                <div className="font-semibold text-xs text-primary">Animations</div>
                <div className="text-muted-foreground text-xs">Smooth UX</div>
              </div>
              <div className="p-4 bg-background rounded-lg border shadow-sm">
                <div className="font-semibold text-xs text-primary">A11y</div>
                <div className="text-muted-foreground text-xs">Skip Link</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
