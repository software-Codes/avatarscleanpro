# Avatar CleanPro - Project Plan

**Project Name:** Avatar CleanPro  
**Type:** Professional Cleaning Services Website  
**Framework:** Next.js 14+ (App Router)  
**Start Date:** January 2026  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design System & Theming](#2-design-system--theming)
3. [Logo Design](#3-logo-design)
4. [Page Structure](#4-page-structure)
5. [Service Categories & Offerings](#5-service-categories--offerings)
6. [Technical Stack](#6-technical-stack)
7. [Component Architecture](#7-component-architecture)
8. [Implementation Phases](#8-implementation-phases)
9. [Contact Form & EmailJS Integration](#9-contact-form--emailjs-integration)
10. [Assets & Media](#10-assets--media)
11. [SEO Strategy](#11-seo-strategy)
12. [Deployment Strategy](#12-deployment-strategy)

---

## 1. Project Overview

### Vision
Create a modern, professional, and visually stunning website for Avatar CleanPro that showcases cleaning services, builds trust with potential customers, and generates leads through an intuitive contact system.

### Goals
- **Primary:** Generate customer inquiries through the contact form
- **Secondary:** Establish brand credibility and professionalism
- **Tertiary:** Provide clear information about services offered

### Target Audience
- **Homeowners** seeking household cleaning (Mama Fua, Deep Cleaning)
- **Busy families** needing childcare support (Nanny, Babysitting)
- **Property managers** and AirBnB hosts (AirBnB Management)
- **Business owners** needing office/commercial cleaning
- **Developers/Contractors** requiring post-construction cleanup
- **Individuals** needing laundry services (Laundromat)
- **Hotels & Rentals** requiring furniture/upholstery cleaning (Seats & Carpets)
- **Aspiring cleaners** looking for training (Cleaning School)

### Key Success Metrics
- Contact form submissions
- Time on site > 2 minutes
- Bounce rate < 40%
- Mobile usability score > 95

---

## 2. Design System & Theming

### 2.1 Color Palette

We recommend a **clean, fresh, and trustworthy** color scheme that evokes cleanliness, professionalism, and environmental consciousness.

#### Primary Theme: "Fresh & Clean"

```css
:root {
  /* Primary - Deep Teal (Trust & Cleanliness) */
  --primary: 173 58% 39%;           /* #28837a - Main brand color */
  --primary-foreground: 0 0% 100%;   /* White text on primary */
  
  /* Secondary - Warm Gold (Premium & Quality) */
  --secondary: 43 74% 49%;           /* #d4a017 - Accent color */
  --secondary-foreground: 0 0% 10%;
  
  /* Accent - Fresh Mint (Clean & Fresh) */
  --accent: 158 64% 52%;             /* #3db389 - Highlights */
  --accent-foreground: 0 0% 100%;
  
  /* Background & Surfaces */
  --background: 0 0% 100%;           /* Pure white */
  --foreground: 220 13% 18%;         /* Dark slate for text */
  
  /* Muted/Subtle */
  --muted: 210 20% 96%;              /* Light gray-blue */
  --muted-foreground: 215 14% 34%;
  
  /* Cards & Containers */
  --card: 0 0% 100%;
  --card-foreground: 220 13% 18%;
  
  /* Borders */
  --border: 214 20% 90%;
  --input: 214 20% 90%;
  
  /* Status Colors */
  --success: 142 76% 36%;
  --warning: 38 92% 50%;
  --error: 0 84% 60%;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

/* Dark mode variant */
.dark {
  --primary: 173 58% 50%;
  --background: 222 47% 8%;
  --foreground: 210 40% 98%;
  --card: 222 47% 11%;
  --muted: 217 33% 17%;
  --muted-foreground: 215 20% 65%;
  --border: 217 33% 17%;
}
```

#### Color Psychology

| Color | Meaning | Usage |
|-------|---------|-------|
| Deep Teal | Trust, cleanliness, professionalism | Primary buttons, headers, logo |
| Warm Gold | Premium, quality, value | CTAs, pricing, highlights |
| Fresh Mint | Clean, fresh, eco-friendly | Success states, accents |
| Pure White | Cleanliness, simplicity | Backgrounds |
| Dark Slate | Authority, readability | Body text |

### 2.2 Typography

#### Font Stack

```css
/* Primary: Headlines & Branding */
--font-heading: "Lexend", system-ui, sans-serif;

/* Secondary: Body Text */
--font-body: "DM Sans", system-ui, sans-serif;

/* Alternative Premium Options */
/* "Outfit" - Modern, geometric, clean */
/* "Plus Jakarta Sans" - Professional, friendly */
/* "Space Grotesk" - Contemporary, distinctive */
```

#### Type Scale

```css
/* Fluid Typography */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.925rem + 0.375vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.375rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem);
--text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem);
--text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 3rem);
--text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 4rem);
--text-5xl: clamp(3rem, 2rem + 5vw, 5rem);
```

### 2.3 Spacing System

```css
/* Base spacing unit: 4px */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### 2.4 Visual Style Guidelines

#### Imagery Style
- **Photography:** High-quality, bright, natural lighting
- **Subjects:** Clean spaces, happy families, professional cleaners
- **Mood:** Fresh, inviting, aspirational
- **Avoid:** Stock-looking, overly staged, cluttered backgrounds

#### Iconography
- **Style:** Line icons with consistent 2px stroke
- **Library:** Lucide React (recommended)
- **Color:** Match text color or primary brand color

#### Border Radius

```css
--radius-sm: 0.375rem;  /* 6px - buttons, inputs */
--radius-md: 0.5rem;    /* 8px - cards */
--radius-lg: 0.75rem;   /* 12px - modals, large cards */
--radius-xl: 1rem;      /* 16px - hero sections */
--radius-full: 9999px;  /* Pills, avatars */
```

#### Animations & Transitions

```css
/* Timing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Durations */
--duration-fast: 150ms;
--duration-normal: 200ms;
--duration-slow: 300ms;
--duration-slower: 500ms;

/* Common Transitions */
--transition-colors: color, background-color, border-color 200ms ease-in-out;
--transition-transform: transform 200ms ease-out;
--transition-all: all 300ms ease-in-out;
```

### 2.5 Responsive Design System

All pages and components MUST be fully responsive across all screen sizes.

#### Breakpoints (Tailwind CSS Default)

| Breakpoint | Min Width | Target Devices |
|------------|-----------|----------------|
| `xs` | 0px | Small phones (portrait) |
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

#### Mobile-First Approach

Always write styles mobile-first, then add breakpoint modifiers:

```tsx
// ✅ Correct: Mobile-first
<div className="px-4 md:px-8 lg:px-16">
  <h1 className="text-2xl md:text-4xl lg:text-5xl">
    Title
  </h1>
</div>

// ❌ Wrong: Desktop-first
<div className="px-16 md:px-8 sm:px-4">
```

#### Container Widths

```tsx
// components/layout/Container.tsx
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn(
      "mx-auto w-full px-4 sm:px-6 lg:px-8",
      "max-w-7xl", // 1280px max
      className
    )}>
      {children}
    </div>
  );
}
```

#### Responsive Grid Patterns

```tsx
// 1 → 2 → 3 → 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

// 1 → 2 → 3 columns (services)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

// Sidebar layout (stack on mobile, side-by-side on desktop)
<div className="flex flex-col lg:flex-row gap-8">
  <aside className="w-full lg:w-1/3">Sidebar</aside>
  <main className="w-full lg:w-2/3">Content</main>
</div>
```

#### Responsive Typography

```css
/* Already defined in Type Scale - uses clamp() for fluid sizing */
--text-base: clamp(1rem, 0.925rem + 0.375vw, 1.125rem);
--text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 4rem);
```

#### Responsive Spacing

```tsx
// Section padding
<section className="py-12 md:py-16 lg:py-24">

// Component gaps
<div className="space-y-4 md:space-y-6 lg:space-y-8">

// Card padding
<div className="p-4 md:p-6 lg:p-8">
```

#### Component Visibility

```tsx
// Show/hide based on screen size
<MobileMenu className="lg:hidden" />
<DesktopNav className="hidden lg:flex" />

// Different layouts per breakpoint
<Logo variant="compact" className="lg:hidden" />
<Logo variant="default" className="hidden lg:block" />
```

#### Touch-Friendly Targets

```tsx
// Minimum 44x44px touch targets on mobile
<button className="min-h-[44px] min-w-[44px] p-3 md:p-2">
  Click me
</button>

// Larger click areas on mobile
<Link className="py-3 md:py-2 block">
  Menu Item
</Link>
```

#### Responsive Images

```tsx
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  className="w-full h-auto object-cover"
/>
```

---

## 3. Logo Design

Since we don't have an image logo, we'll create a beautiful **text-based logo** using CSS and custom typography. This approach is lightweight, scalable, and highly customizable.

### 3.1 Logo Concept Options

#### Option A: "Gradient Accent" (Recommended) ✨

A clean wordmark with a gradient accent on "Clean" or "Pro".

```
┌─────────────────────────────────────────┐
│                                         │
│   Avatar CleanPro                       │
│   ~~~~~~ ─────────                      │
│    Teal   Gradient                      │
│                                         │
└─────────────────────────────────────────┘
```

**Implementation:**
```tsx
// components/common/Logo.tsx
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="font-bold text-2xl text-foreground">
        Avatar
      </span>
      <span className="font-bold text-2xl bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
        CleanPro
      </span>
    </div>
  );
}
```

---

#### Option B: "Icon + Text" 

Combine a simple icon/emoji with text for visual recognition.

```
┌─────────────────────────────────────────┐
│                                         │
│   ✨ Avatar CleanPro                    │
│   or                                    │
│   🧹 Avatar CleanPro                    │
│   or                                    │
│   ◈ Avatar CleanPro                     │
│                                         │
└─────────────────────────────────────────┘
```

**Implementation:**
```tsx
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Sparkles className="h-6 w-6 text-teal-500" />
      <span className="font-bold text-2xl">
        Avatar<span className="text-teal-500">CleanPro</span>
      </span>
    </div>
  );
}
```

---

#### Option C: "Monogram Badge"

A circular badge with initials "AC" or "ACP".

```
┌─────────────────────────────────────────┐
│                                         │
│   ┌────┐                                │
│   │ AC │  Avatar CleanPro               │
│   └────┘                                │
│    Badge                                │
│                                         │
└─────────────────────────────────────────┘
```

**Implementation:**
```tsx
export function Logo({ showText = true }: { showText?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {/* Monogram Badge */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg">
        <span className="font-bold text-lg text-white">AC</span>
        {/* Sparkle decoration */}
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-amber-400" />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-bold text-xl leading-tight">Avatar CleanPro</span>
          <span className="text-xs text-muted-foreground">Professional Cleaning</span>
        </div>
      )}
    </div>
  );
}
```

---

#### Option D: "Stacked Layout"

Two-line stacked text for a compact, modern look.

```
┌─────────────────────────────────────────┐
│                                         │
│   AVATAR                                │
│   CleanPro                              │
│   ─────────                             │
│   (smaller tagline optional)            │
│                                         │
└─────────────────────────────────────────┘
```

**Implementation:**
```tsx
export function Logo({ variant = "horizontal" }: { variant?: "horizontal" | "stacked" }) {
  if (variant === "stacked") {
    return (
      <div className="flex flex-col items-start">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Avatar
        </span>
        <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
          CleanPro
        </span>
      </div>
    );
  }
  
  // Horizontal variant
  return (
    <span className="font-bold text-2xl">
      Avatar<span className="text-teal-500">CleanPro</span>
    </span>
  );
}
```

---

#### Option E: "Animated Sparkle"

Logo with subtle animation for extra polish.

```tsx
export function Logo() {
  return (
    <div className="group flex items-center gap-2">
      {/* Animated sparkle icon */}
      <Sparkles className="h-6 w-6 text-teal-500 transition-transform group-hover:rotate-12 group-hover:scale-110" />
      
      <span className="font-bold text-2xl">
        Avatar
        <span className="relative text-teal-500">
          CleanPro
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300 group-hover:w-full" />
        </span>
      </span>
    </div>
  );
}
```

---

### 3.2 Full Logo Component (Recommended)

The final implementation combining the best ideas:

```tsx
// components/common/Logo.tsx
"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "compact" | "footer";
  className?: string;
  asLink?: boolean;
}

export function Logo({ variant = "default", className, asLink = true }: LogoProps) {
  const logoContent = (
    <div className={cn(
      "group flex items-center gap-2 transition-opacity hover:opacity-80",
      className
    )}>
      {/* Icon */}
      {variant !== "compact" && (
        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 shadow-md transition-transform group-hover:scale-105">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
      )}
      
      {/* Text */}
      <div className={cn(
        "flex flex-col",
        variant === "compact" && "flex-row items-center gap-1"
      )}>
        <span className={cn(
          "font-bold leading-tight",
          variant === "default" && "text-xl",
          variant === "compact" && "text-lg",
          variant === "footer" && "text-2xl"
        )}>
          <span className="text-foreground">Avatar</span>
          <span className="bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
            CleanPro
          </span>
        </span>
        
        {variant === "footer" && (
          <span className="text-sm text-muted-foreground">
            Professional Cleaning Services
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return <Link href="/">{logoContent}</Link>;
  }

  return logoContent;
}
```

---

### 3.3 Logo Variants Usage

| Variant | Usage | Size |
|---------|-------|------|
| `default` | Header navigation | Icon + full text |
| `compact` | Mobile header | Text only, smaller |
| `footer` | Footer section | Full with tagline |

---

### 3.4 Color Variations

```tsx
// Light mode
<Logo /> // Teal gradient on white/light background

// Dark mode (handled automatically with CSS variables)
<Logo /> // Lighter teal/emerald on dark background

// On colored background (e.g., hero with image)
<Logo className="text-white [&_span]:text-white" />
```

---

### 3.5 Favicon Generation

For the favicon, we'll create a simple "AC" monogram or sparkle icon:

```tsx
// Option 1: Generate SVG favicon
// public/icon.svg
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#14b8a6" />
      <stop offset="100%" style="stop-color:#34d399" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#grad)" />
  <text x="16" y="22" text-anchor="middle" fill="white" font-size="14" font-weight="bold">AC</text>
</svg>

// Option 2: Use Next.js app/icon.tsx for dynamic favicon
// app/icon.tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: "linear-gradient(135deg, #14b8a6 0%, #34d399 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          borderRadius: 8,
        }}
      >
        AC
      </div>
    ),
    { ...size }
  );
}
```

---

### 3.6 Logo Decision Matrix

| Criteria | Option A | Option B | Option C | Option D | Option E |
|----------|----------|----------|----------|----------|----------|
| Simplicity | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Brand Recognition | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Scalability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Mobile Friendly | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Implementation | Easy | Easy | Medium | Easy | Medium |

**Recommendation:** Start with **Option A (Gradient Accent)** or **Option B (Icon + Text)** for simplicity, then iterate based on feedback.

---

## 4. Page Structure

> **📱 All pages are fully responsive** - See Section 2.5 for breakpoints and patterns.

### 4.1 Home / Landing Page

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]  Home  Services  Contact      [CTA: Get Quote]  │  ← Header/Navigation
├─────────────────────────────────────────────────────────┤
│                                                         │
│           HERO SECTION                                  │
│   "Professional Cleaning Services                       │
│    You Can Trust"                                       │
│                                                         │
│   [Get Free Quote]  [View Services]                     │
│                                                         │
│   Background: High-quality cleaning image               │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   TRUST INDICATORS                                      │
│   ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                   │
│   │ 500+│  │ 5★  │  │100% │  │ Eco │                   │
│   │Happy│  │Rating│  │Satis│  │Safe │                   │
│   └─────┘  └─────┘  └─────┘  └─────┘                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   SERVICES OVERVIEW (Featured Categories)               │
│   "10 Service Categories • 35+ Services"                │
│                                                         │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│   │🏠 Mama   │  │🛋️ Seats  │  │✨ Deep   │            │
│   │   Fua    │  │ &Carpets │  │ Cleaning │            │
│   └──────────┘  └──────────┘  └──────────┘            │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│   │👕Laundro-│  │🏢 Office │  │👶 Nanny  │            │
│   │   mat    │  │ Cleaning │  │ Services │            │
│   └──────────┘  └──────────┘  └──────────┘            │
│                                                         │
│   [View All 10 Categories →]                            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   WHY CHOOSE US                                         │
│   ┌─────────────────────────────────────────┐          │
│   │ ✓ Experienced & Trained Staff           │          │
│   │ ✓ Eco-Friendly Products                 │          │
│   │ ✓ Satisfaction Guaranteed               │          │
│   │ ✓ Flexible Scheduling                   │          │
│   │ ✓ Competitive Pricing                   │          │
│   └─────────────────────────────────────────┘          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   TESTIMONIALS                                          │
│   "What Our Clients Say"                                │
│                                                         │
│   ┌──────┐  ┌──────┐  ┌──────┐                        │
│   │ ★★★★★│  │ ★★★★★│  │ ★★★★★│                        │
│   │"Great │  │"Very  │  │"Highly│                        │
│   │service"│  │ pro.."│  │recomm"│                        │
│   └──────┘  └──────┘  └──────┘                        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   CTA SECTION                                           │
│   "Ready for a Cleaner Space?"                          │
│   [Get Your Free Quote Today]                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   FOOTER                                                │
│   Logo | Quick Links | Contact Info | Social Media      │
│   © 2026 Avatar CleanPro. All rights reserved.         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Home Page Responsive Behavior

| Section | Mobile (< 768px) | Tablet (768px+) | Desktop (1024px+) |
|---------|------------------|-----------------|-------------------|
| **Header** | Hamburger menu, compact logo | Hamburger menu | Full nav, CTA button |
| **Hero** | Stacked text, full-width buttons | Same | Side-by-side layout option |
| **Trust Indicators** | 2x2 grid | 4 columns | 4 columns |
| **Services Overview** | 1 column, scroll | 2 columns | 3 columns |
| **Why Choose Us** | Stacked list | 2 columns | 2-3 columns |
| **Testimonials** | Carousel/swipe | 2 cards | 3 cards |
| **CTA Section** | Stacked, full-width button | Centered | Centered |
| **Footer** | Stacked sections | 2 columns | 4 columns |

---

### 4.2 Services Page

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [Navigation Header]                                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   PAGE HERO                                                             │
│   "Our Professional Services"                                           │
│   Subtitle: 10 Categories • 35+ Services • Quality You Can Trust        │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   CATEGORY QUICK NAVIGATION (Sticky/Scrollable)                         │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐              │
│   │🏠Mama  │ │🦟Fumi- │ │🛋️Seats │ │✨Deep  │ │🏨AirBnB│              │
│   │  Fua   │ │ gation │ │&Carpet │ │Cleaning│ │ Mgmt   │              │
│   └────────┘ └────────┘ └────────┘ └────────┘ └────────┘              │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐              │
│   │🏢Office│ │🔨Post  │ │👕Laun- │ │👶Nanny │ │🎓Clean │              │
│   │Cleaning│ │Constr. │ │ dromat │ │        │ │ School │              │
│   └────────┘ └────────┘ └────────┘ └────────┘ └────────┘              │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   🏠 MAMA FUA (HOUSEKEEPER) - 6 Services                                │
│   ──────────────────────────────────────                                │
│   "Comprehensive household services"                                    │
│                                                                         │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────┐ │
│   │ Duvet   │ │ Folding │ │  Baby   │ │ Daybug  │ │ House   │ │Iron-│ │
│   │HandWash │ │/Basket  │ │ Sitting │ │ /Hour   │ │Cleaning │ │ ing │ │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────┘ │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   🛋️ SEATS & CARPETS - 5 Services                                       │
│   ────────────────────────────────                                      │
│   "Specialized upholstery and fabric cleaning"                          │
│                                                                         │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│   │   Bed   │ │ Carpet  │ │ Curtain │ │Mattress │ │  Seat   │         │
│   │Cleaning │ │Cleaning │ │Cleaning │ │Cleaning │ │Cleaning │         │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   👕 LAUNDROMAT - 9 Services                                            │
│   ──────────────────────────                                            │
│   "Complete laundry and garment care"                                   │
│                                                                         │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐         │
│   │ Normal  │ │ Duvets  │ │Curtains │ │Bedsheet │ │BedCover │         │
│   │ Laundry │ │         │ │  /Kg    │ │         │ │         │         │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘         │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐                     │
│   │Pillowcs │ │ Towels  │ │DustCoat │ │Overalls │                     │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘                     │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│   [Additional Categories: Fumigation, Deep Cleaning, AirBnB,            │
│    Office Cleaning, Post Construction, Nanny, Cleaning School]          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   CTA: "Need a Custom Service?"                                         │
│   [Contact Us for a Free Quote]                                         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│   [Footer]                                                              │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Services Page Responsive Behavior

| Section | Mobile (< 768px) | Tablet (768px+) | Desktop (1024px+) |
|---------|------------------|-----------------|-------------------|
| **Category Nav** | Horizontal scroll, 2 rows | Horizontal scroll, 2 rows | Grid, all visible |
| **Category Section** | 1 column cards | 2 columns | 3-4 columns |
| **Service Cards** | Full width, compact | 2 per row | 3-4 per row |
| **CTA** | Full-width button | Centered | Centered |

---

### 4.3 Contact Page

```
┌─────────────────────────────────────────────────────────┐
│  [Navigation Header]                                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   PAGE HERO                                             │
│   "Get in Touch"                                        │
│   We'd love to hear from you                            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌─────────────────────┐  ┌─────────────────────────┐ │
│   │                     │  │  CONTACT FORM           │ │
│   │  CONTACT INFO       │  │                         │ │
│   │                     │  │  Name: [______________] │ │
│   │  📍 Address         │  │                         │ │
│   │  Your Street        │  │  Email: [_____________] │ │
│   │  City, State ZIP    │  │                         │ │
│   │                     │  │  Phone: [_____________] │ │
│   │  📞 Phone           │  │                         │ │
│   │  +1-XXX-XXX-XXXX    │  │  Service: [Select ▼__] │ │
│   │                     │  │                         │ │
│   │  ✉️ Email            │  │  Message:              │ │
│   │  info@avatar...     │  │  [                    ] │ │
│   │                     │  │  [                    ] │ │
│   │  🕐 Hours           │  │  [____________________] │ │
│   │  Mon-Fri: 8am-6pm   │  │                         │ │
│   │  Sat: 9am-4pm       │  │  [    Send Message    ] │ │
│   │                     │  │                         │ │
│   └─────────────────────┘  └─────────────────────────┘ │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   MAP (Optional - Google Maps Embed)                    │
│   ┌───────────────────────────────────────────────────┐│
│   │                                                   ││
│   │                  [MAP]                            ││
│   │                                                   ││
│   └───────────────────────────────────────────────────┘│
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   FAQ SECTION (Optional)                                │
│   Common questions and answers                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│   [Footer]                                              │
└─────────────────────────────────────────────────────────┘
```

#### Contact Page Responsive Behavior

| Section | Mobile (< 768px) | Tablet (768px+) | Desktop (1024px+) |
|---------|------------------|-----------------|-------------------|
| **Layout** | Stacked (info → form) | Stacked | Side-by-side (info | form) |
| **Contact Info** | Full width, icons left | Full width | 1/3 width sidebar |
| **Contact Form** | Full width, stacked inputs | Full width | 2/3 width |
| **Form Inputs** | Full width each | 2 columns (name/email) | 2 columns |
| **Map** | Full width, 200px height | Full width, 300px | Full width, 400px |
| **FAQ** | Accordion, full width | Accordion | 2 columns optional |

---

### 4.4 Responsive Component Specifications

#### Header/Navigation

```tsx
// Mobile: Hamburger menu
<header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
  <div className="container flex h-16 items-center justify-between">
    <Logo variant="compact" className="lg:hidden" />
    <Logo variant="default" className="hidden lg:flex" />
    
    {/* Mobile menu trigger */}
    <Button variant="ghost" size="icon" className="lg:hidden">
      <Menu className="h-6 w-6" />
    </Button>
    
    {/* Desktop navigation */}
    <nav className="hidden lg:flex items-center gap-6">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
      <Button>Get Quote</Button>
    </nav>
  </div>
</header>
```

#### Service Cards Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
  {services.map((service) => (
    <ServiceCard key={service.id} service={service} />
  ))}
</div>
```

#### Contact Form Layout

```tsx
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
  {/* Contact Info - Full width on mobile, sidebar on desktop */}
  <div className="w-full lg:w-1/3 space-y-6">
    <ContactInfo />
  </div>
  
  {/* Form - Full width on mobile, main area on desktop */}
  <div className="w-full lg:w-2/3">
    <ContactForm />
  </div>
</div>
```

#### Footer

```tsx
<footer className="bg-muted py-12 md:py-16">
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>Logo & Description</div>
      <div>Quick Links</div>
      <div>Services</div>
      <div>Contact Info</div>
    </div>
  </div>
</footer>
```

---

## 5. Service Categories & Offerings

Avatar CleanPro offers **10 service categories** with a total of **35+ individual services**.

### 4.1 Categories Overview

| # | Category | Services Count | Icon Suggestion |
|---|----------|----------------|-----------------|
| 1 | Mama Fua (Housekeeper) | 6 | 🏠 Home |
| 2 | Fumigation | 1 | 🦟 Bug |
| 3 | Seats & Carpets | 5 | 🛋️ Sofa |
| 4 | Deep Cleaning | 1 | ✨ Sparkles |
| 5 | AirBnB Management | 1 | 🏨 Building |
| 6 | Office Cleaning | 2 | 🏢 Briefcase |
| 7 | Post Construction Cleaning | 2 | 🔨 Hammer |
| 8 | Laundromat | 12 | 👕 Shirt |
| 9 | Nanny | 2 | 👶 Baby |
| 10 | Cleaning School | 2 | 🎓 GraduationCap |

---

### Category 1: Mama Fua (Housekeeper) 🏠

*Comprehensive household services including cleaning, childcare, and laundry assistance.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Duvet (Hand Wash) | Per Piece | Professional hand washing of duvets |
| Folding Per Basket | Per Basket | Neat folding and organizing of laundry |
| Baby Sitting Per Hour | Per Hour | Trusted childcare services |
| Daybug Per Hour | Per Hour | Daytime household assistance |
| House Cleaning Per Room | Per Room | Thorough room-by-room cleaning |
| Ironing Per Basket | Per Basket | Professional ironing services |

---

### Category 2: Fumigation 🦟

*Pest control and fumigation services for homes and offices.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Fumigation Per Bedroom | Per Bedroom | Complete pest elimination treatment |

---

### Category 3: Seats & Carpets 🛋️

*Specialized upholstery and fabric cleaning services.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Bed Cleaning Per Piece | Per Piece | Deep cleaning for beds and bed frames |
| Carpet Cleaning Per Piece | Per Piece | Professional carpet deep cleaning |
| Curtain Cleaning Per Piece | Per Piece | Thorough curtain and drape cleaning |
| Mattress Cleaning Per Piece | Per Piece | Sanitization and stain removal for mattresses |
| Seat Cleaning Per Seater | Per Seater | Sofa and chair upholstery cleaning |

---

### Category 4: Deep Cleaning ✨

*Intensive top-to-bottom cleaning for thorough sanitation.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Deep Cleaning Per Bedroom | Per Bedroom | Comprehensive deep cleaning service |

---

### Category 5: AirBnB Management 🏨

*Professional property management for short-term rentals.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| AirBnB Per Month | Monthly | Complete AirBnB property management |

---

### Category 6: Office Cleaning 🏢

*Professional cleaning solutions for workplaces.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| One-Off Cleaning Per Room | Per Room | Single-session office cleaning |
| Permanent Office Cleaning Service | Contract | Ongoing office cleaning maintenance |

---

### Category 7: Post Construction Cleaning 🔨

*Specialized cleaning for newly built or renovated spaces.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Stand Alone Per Bedroom | Per Bedroom | Post-construction cleaning for single units |
| Several Units (Apartments) | Per Project | Bulk cleaning for apartment complexes |

---

### Category 8: Laundromat 👕

*Complete laundry and garment care services.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Normal Laundry Per Kg | Per Kg | Standard wash, dry, and fold |
| Duvets Cleaning | Per Piece | Professional duvet washing |
| Curtains Cleaning Per Kg | Per Kg | Curtain cleaning by weight |
| Bedsheet Cleaning - Piece | Per Piece | Individual bedsheet cleaning |
| Bed Cover Cleaning - Piece | Per Piece | Bed cover cleaning service |
| Pillowcase Cleaning Per Piece | Per Piece | Pillowcase cleaning |
| Towels Cleaning | Per Piece | Towel washing and sanitization |
| Dust Coat Cleaning Per Piece | Per Piece | Workwear dust coat cleaning |
| Overalls Cleaning Per Piece | Per Piece | Overall/coverall cleaning |

---

### Category 9: Nanny 👶

*Professional childcare placement services.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Book a Nanny - Monthly | Monthly | Standard nanny placement |
| Book an Executive Nanny - Monthly | Monthly | Premium/experienced nanny placement |

---

### Category 10: Cleaning School 🎓

*Professional training programs for cleaning professionals.*

| Service | Pricing Model | Description |
|---------|---------------|-------------|
| Advance Cleaner Training | Per Course | Advanced professional cleaning certification |
| Mama Fua Training | Per Course | Housekeeper skills and best practices |

---

### 4.2 Service Data Structure

```typescript
// types/services.ts

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  pricingModel: "per-piece" | "per-room" | "per-hour" | "per-kg" | "per-seater" | "per-bedroom" | "per-basket" | "monthly" | "per-course" | "per-project";
  category: string;
  image?: string;
  icon: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  services: Service[];
}

export type ServiceCategoryId = 
  | "mama-fua"
  | "fumigation"
  | "seats-carpets"
  | "deep-cleaning"
  | "airbnb-management"
  | "office-cleaning"
  | "post-construction"
  | "laundromat"
  | "nanny"
  | "cleaning-school";
```

### 4.3 Services Data File

```typescript
// data/services.ts
import { ServiceCategory } from "@/types/services";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mama-fua",
    name: "Mama Fua (Housekeeper)",
    slug: "mama-fua",
    description: "Comprehensive household services including cleaning, childcare, and laundry assistance",
    icon: "Home",
    color: "teal",
    services: [
      {
        id: "duvet-hand-wash",
        name: "Duvet (Hand Wash)",
        slug: "duvet-hand-wash",
        description: "Professional hand washing of duvets with care",
        pricingModel: "per-piece",
        category: "mama-fua",
        icon: "Bed",
      },
      {
        id: "folding",
        name: "Folding Per Basket",
        slug: "folding",
        description: "Neat folding and organizing of your laundry",
        pricingModel: "per-basket",
        category: "mama-fua",
        icon: "FolderOpen",
      },
      {
        id: "baby-sitting",
        name: "Baby Sitting Per Hour",
        slug: "baby-sitting",
        description: "Trusted and reliable childcare services",
        pricingModel: "per-hour",
        category: "mama-fua",
        icon: "Baby",
        popular: true,
      },
      {
        id: "daybug",
        name: "Daybug Per Hour",
        slug: "daybug",
        description: "Daytime household assistance and support",
        pricingModel: "per-hour",
        category: "mama-fua",
        icon: "Clock",
      },
      {
        id: "house-cleaning",
        name: "House Cleaning Per Room",
        slug: "house-cleaning",
        description: "Thorough room-by-room cleaning service",
        pricingModel: "per-room",
        category: "mama-fua",
        icon: "Sparkles",
        popular: true,
      },
      {
        id: "ironing",
        name: "Ironing Per Basket",
        slug: "ironing",
        description: "Professional ironing services for wrinkle-free clothes",
        pricingModel: "per-basket",
        category: "mama-fua",
        icon: "Shirt",
      },
    ],
  },
  {
    id: "fumigation",
    name: "Fumigation",
    slug: "fumigation",
    description: "Professional pest control and fumigation services",
    icon: "Bug",
    color: "orange",
    services: [
      {
        id: "fumigation-bedroom",
        name: "Fumigation Per Bedroom",
        slug: "fumigation-bedroom",
        description: "Complete pest elimination treatment for bedrooms",
        pricingModel: "per-bedroom",
        category: "fumigation",
        icon: "Shield",
      },
    ],
  },
  {
    id: "seats-carpets",
    name: "Seats & Carpets",
    slug: "seats-carpets",
    description: "Specialized upholstery and fabric cleaning services",
    icon: "Sofa",
    color: "purple",
    services: [
      {
        id: "bed-cleaning",
        name: "Bed Cleaning Per Piece",
        slug: "bed-cleaning",
        description: "Deep cleaning for beds and bed frames",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Bed",
      },
      {
        id: "carpet-cleaning",
        name: "Carpet Cleaning Per Piece",
        slug: "carpet-cleaning",
        description: "Professional carpet deep cleaning and stain removal",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "LayoutGrid",
        popular: true,
      },
      {
        id: "curtain-cleaning",
        name: "Curtain Cleaning Per Piece",
        slug: "curtain-cleaning",
        description: "Thorough curtain and drape cleaning",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "PanelLeft",
      },
      {
        id: "mattress-cleaning",
        name: "Mattress Cleaning Per Piece",
        slug: "mattress-cleaning",
        description: "Sanitization and stain removal for mattresses",
        pricingModel: "per-piece",
        category: "seats-carpets",
        icon: "Bed",
        popular: true,
      },
      {
        id: "seat-cleaning",
        name: "Seat Cleaning Per Seater",
        slug: "seat-cleaning",
        description: "Sofa and chair upholstery cleaning",
        pricingModel: "per-seater",
        category: "seats-carpets",
        icon: "Armchair",
        popular: true,
      },
    ],
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description: "Intensive top-to-bottom cleaning for thorough sanitation",
    icon: "Sparkles",
    color: "blue",
    services: [
      {
        id: "deep-cleaning-bedroom",
        name: "Deep Cleaning Per Bedroom",
        slug: "deep-cleaning-bedroom",
        description: "Comprehensive deep cleaning service for bedrooms",
        pricingModel: "per-bedroom",
        category: "deep-cleaning",
        icon: "Sparkles",
        popular: true,
      },
    ],
  },
  {
    id: "airbnb-management",
    name: "AirBnB Management",
    slug: "airbnb-management",
    description: "Professional property management for short-term rentals",
    icon: "Building",
    color: "rose",
    services: [
      {
        id: "airbnb-monthly",
        name: "AirBnB Per Month",
        slug: "airbnb-monthly",
        description: "Complete AirBnB property management including cleaning and guest coordination",
        pricingModel: "monthly",
        category: "airbnb-management",
        icon: "Calendar",
      },
    ],
  },
  {
    id: "office-cleaning",
    name: "Office Cleaning",
    slug: "office-cleaning",
    description: "Professional cleaning solutions for workplaces",
    icon: "Briefcase",
    color: "slate",
    services: [
      {
        id: "one-off-office",
        name: "One-Off Cleaning Per Room",
        slug: "one-off-office",
        description: "Single-session office cleaning service",
        pricingModel: "per-room",
        category: "office-cleaning",
        icon: "Building2",
      },
      {
        id: "permanent-office",
        name: "Permanent Office Cleaning Service",
        slug: "permanent-office",
        description: "Ongoing office cleaning maintenance contract",
        pricingModel: "monthly",
        category: "office-cleaning",
        icon: "CalendarCheck",
        popular: true,
      },
    ],
  },
  {
    id: "post-construction",
    name: "Post Construction Cleaning",
    slug: "post-construction",
    description: "Specialized cleaning for newly built or renovated spaces",
    icon: "Hammer",
    color: "amber",
    services: [
      {
        id: "stand-alone",
        name: "Stand Alone Per Bedroom",
        slug: "stand-alone",
        description: "Post-construction cleaning for single residential units",
        pricingModel: "per-bedroom",
        category: "post-construction",
        icon: "Home",
      },
      {
        id: "apartments",
        name: "Several Units (Apartments)",
        slug: "apartments",
        description: "Bulk post-construction cleaning for apartment complexes",
        pricingModel: "per-project",
        category: "post-construction",
        icon: "Building",
      },
    ],
  },
  {
    id: "laundromat",
    name: "Laundromat",
    slug: "laundromat",
    description: "Complete laundry and garment care services",
    icon: "Shirt",
    color: "cyan",
    services: [
      {
        id: "normal-laundry",
        name: "Normal Laundry Per Kg",
        slug: "normal-laundry",
        description: "Standard wash, dry, and fold service",
        pricingModel: "per-kg",
        category: "laundromat",
        icon: "Droplets",
        popular: true,
      },
      {
        id: "duvets-laundry",
        name: "Duvets Cleaning",
        slug: "duvets-laundry",
        description: "Professional duvet washing and care",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Bed",
      },
      {
        id: "curtains-laundry",
        name: "Curtains Cleaning Per Kg",
        slug: "curtains-laundry",
        description: "Curtain cleaning by weight",
        pricingModel: "per-kg",
        category: "laundromat",
        icon: "PanelLeft",
      },
      {
        id: "bedsheet-cleaning",
        name: "Bedsheet Cleaning - Piece",
        slug: "bedsheet-cleaning",
        description: "Individual bedsheet cleaning service",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Layers",
      },
      {
        id: "bed-cover-cleaning",
        name: "Bed Cover Cleaning - Piece",
        slug: "bed-cover-cleaning",
        description: "Bed cover cleaning and care",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Layers",
      },
      {
        id: "pillowcase-cleaning",
        name: "Pillowcase Cleaning Per Piece",
        slug: "pillowcase-cleaning",
        description: "Pillowcase cleaning service",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Square",
      },
      {
        id: "towels-cleaning",
        name: "Towels Cleaning",
        slug: "towels-cleaning",
        description: "Towel washing and sanitization",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "Toilet",
      },
      {
        id: "dust-coat-cleaning",
        name: "Dust Coat Cleaning Per Piece",
        slug: "dust-coat-cleaning",
        description: "Professional workwear dust coat cleaning",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "ShirtIcon",
      },
      {
        id: "overalls-cleaning",
        name: "Overalls Cleaning Per Piece",
        slug: "overalls-cleaning",
        description: "Overall and coverall cleaning service",
        pricingModel: "per-piece",
        category: "laundromat",
        icon: "ShirtIcon",
      },
    ],
  },
  {
    id: "nanny",
    name: "Nanny",
    slug: "nanny",
    description: "Professional childcare placement services",
    icon: "Baby",
    color: "pink",
    services: [
      {
        id: "nanny-monthly",
        name: "Book a Nanny - Monthly",
        slug: "nanny-monthly",
        description: "Standard nanny placement service",
        pricingModel: "monthly",
        category: "nanny",
        icon: "UserCheck",
      },
      {
        id: "executive-nanny",
        name: "Book an Executive Nanny - Monthly",
        slug: "executive-nanny",
        description: "Premium experienced nanny placement",
        pricingModel: "monthly",
        category: "nanny",
        icon: "Star",
        popular: true,
      },
    ],
  },
  {
    id: "cleaning-school",
    name: "Cleaning School",
    slug: "cleaning-school",
    description: "Professional training programs for cleaning professionals",
    icon: "GraduationCap",
    color: "emerald",
    services: [
      {
        id: "advance-training",
        name: "Advance Cleaner Training",
        slug: "advance-training",
        description: "Advanced professional cleaning certification program",
        pricingModel: "per-course",
        category: "cleaning-school",
        icon: "Award",
      },
      {
        id: "mama-fua-training",
        name: "Mama Fua Training",
        slug: "mama-fua-training",
        description: "Housekeeper skills and best practices training",
        pricingModel: "per-course",
        category: "cleaning-school",
        icon: "BookOpen",
      },
    ],
  },
];

// Helper functions
export function getAllServices() {
  return serviceCategories.flatMap((cat) => cat.services);
}

export function getPopularServices() {
  return getAllServices().filter((service) => service.popular);
}

export function getServiceBySlug(slug: string) {
  return getAllServices().find((service) => service.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return serviceCategories.find((cat) => cat.slug === slug);
}

export function getServicesByCategory(categoryId: string) {
  const category = serviceCategories.find((cat) => cat.id === categoryId);
  return category?.services || [];
}
```

---

## 6. Technical Stack

### 5.1 Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.x / 15.x | React framework with App Router |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.x | Styling |
| shadcn/ui | Latest | UI component library |

### 5.2 Additional Libraries

| Library | Purpose |
|---------|---------|
| `lucide-react` | Icons |
| `@emailjs/browser` | Contact form email sending |
| `zod` | Form validation |
| `react-hook-form` | Form state management |
| `framer-motion` | Animations |
| `clsx` + `tailwind-merge` | Conditional styling |
| `next-themes` | Dark mode support |

### 5.3 Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| Husky | Git hooks |
| lint-staged | Pre-commit checks |

### 5.4 Package.json Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@emailjs/browser": "^4.3.0",
    "react-hook-form": "^7.51.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.344.0",
    "framer-motion": "^11.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "next-themes": "^0.3.0",
    "class-variance-authority": "^0.7.0",
    "@radix-ui/react-slot": "^1.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "prettier": "^3.2.0",
    "prettier-plugin-tailwindcss": "^0.5.0"
  }
}
```

---

## 7. Component Architecture

### 6.1 Component Structure

```
components/
├── ui/                          # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── select.tsx
│   ├── label.tsx
│   ├── toast.tsx
│   └── ...
│
├── layout/                      # Layout components
│   ├── Header.tsx               # Site header with navigation
│   ├── Footer.tsx               # Site footer
│   ├── Navigation.tsx           # Navigation menu
│   ├── MobileMenu.tsx           # Mobile navigation drawer
│   └── Container.tsx            # Max-width container
│
├── sections/                    # Page sections
│   ├── home/
│   │   ├── HeroSection.tsx      # Landing hero
│   │   ├── TrustIndicators.tsx  # Stats/badges
│   │   ├── ServicesOverview.tsx # Featured services
│   │   ├── WhyChooseUs.tsx      # Benefits section
│   │   ├── Testimonials.tsx     # Customer reviews
│   │   └── CTASection.tsx       # Call to action
│   │
│   ├── services/
│   │   ├── ServicesHero.tsx     # Services page hero
│   │   ├── ServiceCategory.tsx  # Category section
│   │   └── ServiceCard.tsx      # Individual service card
│   │
│   └── contact/
│       ├── ContactHero.tsx      # Contact page hero
│       ├── ContactInfo.tsx      # Contact details
│       └── ContactForm.tsx      # Email form
│
├── forms/                       # Form components
│   ├── ContactForm.tsx          # Main contact form
│   └── QuoteForm.tsx            # Quick quote form (optional)
│
├── common/                      # Reusable components
│   ├── Logo.tsx                 # Brand logo
│   ├── SectionHeading.tsx       # Section titles
│   ├── ServiceIcon.tsx          # Service icon display
│   └── SocialLinks.tsx          # Social media links
│
└── structured-data/             # SEO structured data
    ├── LocalBusiness.tsx
    └── ServiceSchema.tsx
```

### 6.2 Key Component Specifications

#### Header Component
```typescript
// components/layout/Header.tsx
interface HeaderProps {
  transparent?: boolean; // For hero overlay
}

// Features:
// - Logo (left)
// - Navigation links (center/right)
// - CTA button (right)
// - Mobile hamburger menu
// - Sticky on scroll
// - Optional transparent mode for hero
```

#### Hero Section
```typescript
// components/sections/home/HeroSection.tsx
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage: string;
}

// Features:
// - Full viewport height (100vh)
// - Background image with overlay
// - Animated text entrance
// - Responsive typography
// - Two CTA buttons
```

#### Service Card
```typescript
// components/sections/services/ServiceCard.tsx
interface ServiceCardProps {
  service: Service;
  variant?: "default" | "featured";
}

// Features:
// - Image with hover effect
// - Service name and description
// - Icon indicator
// - "Learn more" or "Contact" action
// - Hover animations
```

#### Contact Form
```typescript
// components/forms/ContactForm.tsx
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

// Features:
// - Form validation with Zod
// - React Hook Form integration
// - EmailJS sending
// - Loading states
// - Success/error feedback
// - Honeypot spam protection
```

---

## 8. Implementation Phases

### Phase 1: Project Setup (Day 1)
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS
- [ ] Set up shadcn/ui
- [ ] Configure ESLint & Prettier
- [ ] Set up project structure
- [ ] Create theme/design tokens
- [ ] Configure fonts

### Phase 2: Layout & Navigation (Day 2)
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Create Navigation component
- [ ] Create Mobile Menu component
- [ ] Create root layout
- [ ] Add skip link for accessibility

### Phase 3: Home Page (Day 2-3)
- [ ] Create Hero Section
- [ ] Create Trust Indicators section
- [ ] Create Services Overview section
- [ ] Create Why Choose Us section
- [ ] Create Testimonials section
- [ ] Create CTA Section
- [ ] Add animations

### Phase 4: Services Page (Day 3-4)
- [ ] Create Services page hero
- [ ] Create service data structure
- [ ] Create Service Category component
- [ ] Create Service Card component
- [ ] Populate with all services
- [ ] Add filtering (optional)

### Phase 5: Contact Page (Day 4-5)
- [ ] Create Contact page hero
- [ ] Create Contact Info component
- [ ] Set up EmailJS account and template
- [ ] Create Contact Form with validation
- [ ] Implement form submission
- [ ] Add success/error states
- [ ] Add map embed (optional)

### Phase 6: SEO & Optimization (Day 5)
- [ ] Add metadata to all pages
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Add structured data (JSON-LD)
- [ ] Optimize images
- [ ] Run Lighthouse audit
- [ ] Fix accessibility issues

### Phase 7: Testing & Deployment (Day 6)
- [ ] Test all pages on multiple devices
- [ ] Test contact form thoroughly
- [ ] Cross-browser testing
- [ ] Final Lighthouse audit
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Set up analytics

---

## 9. Contact Form & EmailJS Integration

### 8.1 EmailJS Setup

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com)
   - Sign up for free account

2. **Create Email Service**
   - Add email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   ```
   Subject: New Contact from {{from_name}} - Avatar CleanPro

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Service Interested In: {{service}}

   Message:
   {{message}}
   ```
   - Note the Template ID

4. **Get Public Key**
   - Go to Account → API Keys
   - Copy the Public Key

### 8.2 Environment Variables

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
```

### 8.3 Implementation

```typescript
// lib/emailjs.ts
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function sendContactEmail(data: ContactFormData) {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone || "Not provided",
    service: data.service,
    message: data.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
```

### 8.4 Form Component

```typescript
// components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendContactEmail } from "@/lib/emailjs";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0), // Spam protection
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(data: FormData) {
    if (data.honeypot) return; // Spam bot detected

    setStatus("loading");

    try {
      await sendContactEmail(data);
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields... */}
    </form>
  );
}
```

---

## 10. Assets & Media

### 9.1 Required Images

#### Core Assets

| Asset | Type | Usage | Notes |
|-------|------|-------|-------|
| Logo | CSS/Component | Header, footer | Text-based (see Section 3) |
| `og-image.jpg` | 1200×630 | Social sharing | Include logo + tagline |
| `favicon` | Dynamic | Browser tab | Generated via `app/icon.tsx` |
| `apple-icon` | Dynamic | iOS | Generated via `app/apple-icon.tsx` |

> **Note:** Logo is implemented as a React component with CSS styling - no image file needed. See [Section 3: Logo Design](#3-logo-design) for implementation details.

#### Hero Images

| Image | Dimensions | Usage |
|-------|------------|-------|
| `hero-main.jpg` | 1920×1080 | Home page hero |
| `services-hero.jpg` | 1920×600 | Services page header |
| `contact-hero.jpg` | 1920×600 | Contact page header |

#### Category Images (600×400 each)

| Category | Suggested Image | Search Terms |
|----------|-----------------|--------------|
| `mama-fua.jpg` | Housekeeper cleaning home | "housekeeper", "home cleaning" |
| `fumigation.jpg` | Pest control professional | "pest control", "fumigation" |
| `seats-carpets.jpg` | Sofa/carpet cleaning | "carpet cleaning", "upholstery" |
| `deep-cleaning.jpg` | Deep cleaning in progress | "deep cleaning", "thorough clean" |
| `airbnb.jpg` | Modern apartment/rental | "airbnb property", "vacation rental" |
| `office-cleaning.jpg` | Office being cleaned | "office cleaning", "commercial clean" |
| `post-construction.jpg` | New building cleanup | "post construction", "new build" |
| `laundromat.jpg` | Laundry/folded clothes | "laundry service", "clean linens" |
| `nanny.jpg` | Nanny with child | "nanny", "childcare" |
| `cleaning-school.jpg` | Training/classroom | "cleaning training", "professional course" |

#### Service Images (Optional - 400×300 each)

For individual service cards within categories. Can use category image as fallback.

#### Other Assets

| Image | Dimensions | Usage | Notes |
|-------|------------|-------|-------|
| `about-section.jpg` | 800×600 | Why choose us | Optional |
| Testimonial avatars | 100×100 | Reviews | Optional |
| Team photos | 400×400 | About section | Optional |

### 9.2 Image Optimization Checklist

- [ ] Compress all images (use TinyPNG, Squoosh)
- [ ] Convert to WebP where possible
- [ ] Provide multiple sizes for responsive images
- [ ] Add blur placeholders for hero images
- [ ] Ensure all images have descriptive alt text
- [ ] Optimize for Core Web Vitals (LCP)

### 9.3 Placeholder/Stock Image Sources

- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Freepik](https://freepik.com) - Illustrations and photos
- [Undraw](https://undraw.co) - Free illustrations

**Search terms by category:**
- **Mama Fua:** "housekeeper", "home cleaning", "domestic helper", "ironing clothes"
- **Fumigation:** "pest control", "fumigation service", "exterminator"
- **Seats & Carpets:** "carpet cleaning", "sofa cleaning", "upholstery steam clean"
- **Deep Cleaning:** "deep house cleaning", "thorough cleaning", "spring cleaning"
- **AirBnB:** "vacation rental", "airbnb interior", "modern apartment"
- **Office:** "office cleaning", "commercial cleaning", "janitor"
- **Post Construction:** "construction cleanup", "new build cleaning"
- **Laundromat:** "laundry service", "folded towels", "clean linens", "washing machine"
- **Nanny:** "nanny with child", "childcare", "babysitter"
- **Cleaning School:** "training classroom", "certificate", "professional course"

---

## 11. SEO Strategy

### 10.1 Keyword Strategy

| Page | Primary Keywords | Secondary Keywords |
|------|------------------|-------------------|
| Home | cleaning services, professional cleaning, Avatar CleanPro | house cleaning, office cleaning, laundry services, nanny services |
| Services | carpet cleaning, mattress cleaning, deep cleaning, fumigation | seat cleaning, curtain cleaning, laundromat, babysitting services |
| Mama Fua | housekeeper services, house cleaning, babysitting | ironing services, folding laundry, daybug services |
| Laundromat | laundry services, duvet cleaning, bedsheet cleaning | curtain cleaning, towel cleaning, normal laundry |
| Office | office cleaning services, commercial cleaning | permanent office cleaning, one-off cleaning |
| Nanny | nanny services, book a nanny, executive nanny | monthly nanny, childcare services |
| Training | cleaning training, mama fua training | advanced cleaner training, cleaning certification |
| Contact | contact cleaning service, cleaning quote | get cleaning quote, hire cleaners |

### 10.2 Long-tail Keywords

| Category | Long-tail Keywords |
|----------|-------------------|
| Mama Fua | "affordable house cleaning per room", "hourly babysitting near me" |
| Seats & Carpets | "professional mattress cleaning service", "sofa cleaning per seater" |
| Laundromat | "duvet cleaning service near me", "laundry per kg price" |
| Deep Cleaning | "deep cleaning bedroom service", "thorough house deep clean" |
| AirBnB | "airbnb property management monthly", "short term rental cleaning" |
| Post Construction | "post construction cleaning apartments", "new build cleanup service" |
| Fumigation | "bedroom fumigation service", "pest control fumigation" |
| Nanny | "executive nanny monthly booking", "professional nanny placement" |

### 10.2 On-Page SEO Checklist

- [ ] Unique title tags per page (50-60 chars)
- [ ] Meta descriptions (150-160 chars)
- [ ] H1 tag on every page
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text on all images
- [ ] Internal linking between pages
- [ ] External links to authoritative sources (optional)
- [ ] Schema markup for local business
- [ ] Schema markup for services

### 10.3 Technical SEO Checklist

- [ ] Mobile-friendly design
- [ ] Fast page load (<3s)
- [ ] SSL certificate (HTTPS)
- [ ] XML sitemap
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] 404 page
- [ ] Semantic HTML

---

## 12. Deployment Strategy

### 11.1 Recommended Platform: Vercel

**Why Vercel?**
- Native Next.js support
- Automatic deployments from Git
- Edge network for fast loading
- Free SSL
- Analytics included
- Easy environment variables

### 11.2 Deployment Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/avatar-cleanpro.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import project from GitHub
   - Configure environment variables
   - Deploy

3. **Configure Domain**
   - Add custom domain in Vercel dashboard
   - Update DNS records
   - Wait for SSL provisioning

### 11.3 Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form with real submission
- [ ] Verify analytics tracking
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Monitor Core Web Vitals

---

## Appendix A: File Structure

```
avatar-cleanpro/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Home page
│   │   ├── services/
│   │   │   └── page.tsx          # Services page
│   │   └── contact/
│   │       └── page.tsx          # Contact page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Optional API route
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── not-found.tsx             # 404 page
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Dynamic robots.txt
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── layout/                   # Layout components
│   ├── sections/                 # Page sections
│   ├── forms/                    # Form components
│   ├── common/                   # Shared components
│   └── structured-data/          # SEO schemas
├── lib/
│   ├── utils.ts                  # Utility functions
│   ├── emailjs.ts                # EmailJS integration
│   └── constants.ts              # App constants
├── config/
│   └── site.ts                   # Site configuration
├── data/
│   └── services.ts               # Services data
├── types/
│   └── index.ts                  # TypeScript types
├── public/
│   ├── images/                   # Static images
│   └── icons/                    # Favicons
├── Docs/
│   ├── Best-practices/           # Best practices docs
│   └── plans/                    # Project plans
├── .env.local                    # Environment variables
├── .env.example                  # Example env file
├── next.config.js                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

---

## Appendix B: Design References

### Inspiration Websites
- [Handy](https://handy.com) - Clean service booking
- [Merry Maids](https://merrymaids.com) - Professional cleaning
- [Molly Maid](https://mollymaid.com) - Residential cleaning
- [The Maids](https://maids.com) - House cleaning

### UI Component References
- [shadcn/ui](https://ui.shadcn.com) - Component library
- [Tailwind UI](https://tailwindui.com) - Premium components
- [Aceternity UI](https://ui.aceternity.com) - Animation inspiration

---

*Document Created: January 2026*  
*Last Updated: January 2026*  
*Version: 1.0*
