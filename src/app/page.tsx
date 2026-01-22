import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Home, Shirt, Baby } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Fully Responsive */}
      <section className="flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32">
        <div className="container max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
            {/* Logo with gradient */}
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-teal-500" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-foreground">Avatar</span>
                <span className="bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
                  CleanPro
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl">
              Professional Cleaning Services You Can Trust
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="text-base md:text-lg">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg">
                View Services
              </Button>
            </div>

            {/* Status badges */}
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              <Badge variant="secondary" className="text-xs md:text-sm">
                ✨ 10 Service Categories
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm">
                🎯 35+ Services
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm">
                📱 Fully Responsive
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Responsive Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-muted/50">
        <div className="container px-4 max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Professional cleaning solutions for every need
            </p>
          </div>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/10">
                    <Home className="h-6 w-6 text-teal-500" />
                  </div>
                  <CardTitle>Mama Fua</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive household services including cleaning, childcare, and laundry
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Shirt className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle>Laundromat</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete laundry and garment care services with professional handling
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10">
                    <Baby className="h-6 w-6 text-pink-500" />
                  </div>
                  <CardTitle>Nanny Services</CardTitle>
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
            <Button variant="outline" size="lg">
              View All 10 Categories →
            </Button>
          </div>
        </div>
      </section>

      {/* Setup Info */}
      <section className="py-8 md:py-12 bg-primary/5">
        <div className="container px-4 max-w-4xl">
          <div className="text-center space-y-4">
            <h3 className="text-lg md:text-xl font-semibold text-primary">
              ✅ Development Environment Ready
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="p-4 bg-background rounded-lg border">
                <div className="font-semibold">Next.js 16</div>
                <div className="text-muted-foreground">App Router</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="font-semibold">TypeScript</div>
                <div className="text-muted-foreground">Strict Mode</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="font-semibold">Tailwind CSS</div>
                <div className="text-muted-foreground">+ shadcn/ui</div>
              </div>
              <div className="p-4 bg-background rounded-lg border">
                <div className="font-semibold">Responsive</div>
                <div className="text-muted-foreground">Mobile-First</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

