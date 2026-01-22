"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

/** Testimonial data */
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Homeowner",
    content:
      "Avatar CleanPro transformed my home! The deep cleaning service was thorough, and the team was professional and friendly. Highly recommend their services.",
    rating: 5,
    image: null, // Placeholder for future image
  },
  {
    id: 2,
    name: "James K.",
    role: "Property Manager",
    content:
      "We use Avatar CleanPro for our AirBnB properties. Their turnaround is quick, and our guests always comment on how clean the places are. Excellent service!",
    rating: 5,
    image: null,
  },
  {
    id: 3,
    name: "Grace W.",
    role: "Working Mom",
    content:
      "The nanny service has been a lifesaver for our family. Our nanny is trustworthy, experienced, and our kids adore her. Thank you, Avatar CleanPro!",
    rating: 5,
    image: null,
  },
  {
    id: 4,
    name: "Michael O.",
    role: "Office Manager",
    content:
      "Our office has never looked better. The team is punctual, thorough, and uses eco-friendly products which aligns with our company values.",
    rating: 5,
    image: null,
  },
  {
    id: 5,
    name: "Linda A.",
    role: "Homeowner",
    content:
      "The carpet cleaning service exceeded my expectations. Stains I thought were permanent are completely gone. Will definitely use them again!",
    rating: 5,
    image: null,
  },
];

/** Star rating component */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-secondary text-secondary"
              : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
}

/**
 * Testimonials Section with carousel functionality.
 * Shows customer reviews with star ratings.
 */
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 testimonials on desktop, 1 on mobile
  const visibleCount = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const maxIndex = testimonials.length - visibleCount.desktop;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-muted/30">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              What Our Clients <span className="text-gradient">Say</span>
            </h2>
          </div>

          {/* Navigation arrows - desktop */}
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid/Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount.desktop + 2)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <CardContent className="p-6 md:p-8">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  {/* Rating */}
                  <StarRating rating={testimonial.rating} />

                  {/* Content */}
                  <p className="mt-4 text-foreground leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation arrows - mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - 1}
            className="rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(Math.min(index, maxIndex))}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === index ||
                  (index > maxIndex && currentIndex >= maxIndex)
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
