import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";

/**
 * Custom 404 Not Found Page
 * Displayed when a user navigates to a non-existent route
 */
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-muted/30 to-background">
      <Container>
        <div className="text-center space-y-6 max-w-2xl mx-auto py-16">
          {/* 404 Visual */}
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-heading font-bold text-primary/10 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-20 w-20 md:h-24 md:w-24 text-muted-foreground/40" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved or doesn't exist.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="gap-2 min-w-[200px]">
              <Link href="/">
                <Home className="h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 min-w-[200px]"
            >
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>

          {/* Help text */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Need help? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> or use the navigation above.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
