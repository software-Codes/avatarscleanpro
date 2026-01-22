# Next.js Best Practices Guide

A comprehensive guide for building production-ready Next.js applications with focus on security, SEO, performance, and optimization.

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Security Best Practices](#2-security-best-practices)
3. [SEO Optimization](#3-seo-optimization)
4. [Performance Optimization](#4-performance-optimization)
5. [Image Optimization](#5-image-optimization)
6. [Caching Strategies](#6-caching-strategies)
7. [Code Quality & Standards](#7-code-quality--standards)
8. [Responsive Design](#8-responsive-design)
9. [Accessibility (a11y)](#9-accessibility-a11y)
10. [Environment & Configuration](#10-environment--configuration)
11. [Deployment Best Practices](#11-deployment-best-practices)
12. [Monitoring & Analytics](#12-monitoring--analytics)
13. [Testing Strategies](#13-testing-strategies)

---

## 1. Project Structure

### Recommended App Router Structure (Next.js 14+)

```
├── app/
│   ├── (marketing)/           # Route group for marketing pages
│   │   ├── page.tsx           # Home/Landing page
│   │   ├── services/
│   │   │   └── page.tsx       # Services page
│   │   └── contact/
│   │       └── page.tsx       # Contact page
│   ├── api/                   # API routes
│   │   └── contact/
│   │       └── route.ts       # Contact form API endpoint
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   └── not-found.tsx          # Custom 404 page
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/                # Layout components (Header, Footer, etc.)
│   ├── sections/              # Page sections (Hero, Features, etc.)
│   └── forms/                 # Form components
├── lib/
│   ├── utils.ts               # Utility functions
│   └── constants.ts           # App constants
├── hooks/                     # Custom React hooks
├── types/                     # TypeScript type definitions
├── public/
│   ├── images/                # Static images
│   ├── icons/                 # Icons and favicons
│   └── fonts/                 # Custom fonts (if self-hosted)
├── styles/                    # Additional styles if needed
└── config/
    └── site.ts                # Site configuration
```

### File Naming Conventions

- **Components**: PascalCase (`HeroSection.tsx`, `ContactForm.tsx`)
- **Utilities/Hooks**: camelCase (`useContactForm.ts`, `formatDate.ts`)
- **Constants**: SCREAMING_SNAKE_CASE for values (`MAX_FILE_SIZE`)
- **Types/Interfaces**: PascalCase with descriptive names (`ServiceCategory`, `ContactFormData`)

---

## 2. Security Best Practices

### 2.1 Environment Variables

```typescript
// ❌ Never expose sensitive data
const apiKey = "sk-secret-key"; // NEVER hardcode

// ✅ Use environment variables
const apiKey = process.env.EMAIL_SERVICE_KEY;

// ✅ Validate environment variables at build time
// lib/env.ts
import { z } from "zod";

const envSchema = z.object({
  EMAILJS_SERVICE_ID: z.string().min(1),
  EMAILJS_TEMPLATE_ID: z.string().min(1),
  EMAILJS_PUBLIC_KEY: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
});

export const env = envSchema.parse({
  EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
```

### 2.2 Content Security Policy (CSP)

```typescript
// next.config.js
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.emailjs.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https: blob:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self' https://api.emailjs.com;
      frame-ancestors 'none';
    `.replace(/\n/g, ""),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
```

### 2.3 Input Validation & Sanitization

```typescript
// lib/validation.ts
import { z } from "zod";
import DOMPurify from "isomorphic-dompurify";

// Define strict schemas for user input
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long")
    .transform((val) => DOMPurify.sanitize(val.trim())),
  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email is too long")
    .toLowerCase(),
  phone: z
    .string()
    .regex(/^[\d\s\-+()]*$/, "Invalid phone number")
    .optional(),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long")
    .transform((val) => DOMPurify.sanitize(val.trim())),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

### 2.4 Rate Limiting

```typescript
// app/api/contact/route.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 5 requests per hour
  analytics: true,
});

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);

  if (!success) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      }
    );
  }

  // Process the request...
}
```

### 2.5 CSRF Protection

```typescript
// For forms, use Next.js Server Actions with built-in CSRF protection
// app/actions/contact.ts
"use server";

import { revalidatePath } from "next/cache";

export async function submitContactForm(formData: FormData) {
  // Server actions automatically include CSRF protection
  const data = Object.fromEntries(formData);
  // Process form...
}
```

---

## 3. SEO Optimization

### 3.1 Metadata Configuration

```typescript
// app/layout.tsx
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://avatarcleanpro.com"),
  title: {
    default: "Avatar CleanPro | Professional Cleaning Services",
    template: "%s | Avatar CleanPro",
  },
  description:
    "Professional cleaning services for homes and businesses. Quality cleaning you can trust.",
  keywords: [
    "cleaning services",
    "professional cleaning",
    "home cleaning",
    "office cleaning",
    "deep cleaning",
  ],
  authors: [{ name: "Avatar CleanPro" }],
  creator: "Avatar CleanPro",
  publisher: "Avatar CleanPro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avatarcleanpro.com",
    siteName: "Avatar CleanPro",
    title: "Avatar CleanPro | Professional Cleaning Services",
    description:
      "Professional cleaning services for homes and businesses. Quality cleaning you can trust.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avatar CleanPro - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avatar CleanPro | Professional Cleaning Services",
    description: "Professional cleaning services for homes and businesses.",
    images: ["/images/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://avatarcleanpro.com",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
```

### 3.2 Page-Specific Metadata

```typescript
// app/services/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive range of professional cleaning services including residential, commercial, deep cleaning, and more.",
  openGraph: {
    title: "Our Cleaning Services | Avatar CleanPro",
    description: "Explore our comprehensive range of professional cleaning services.",
    url: "https://avatarcleanpro.com/services",
  },
  alternates: {
    canonical: "https://avatarcleanpro.com/services",
  },
};
```

### 3.3 Structured Data (JSON-LD)

```typescript
// components/structured-data/LocalBusiness.tsx
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://avatarcleanpro.com",
    name: "Avatar CleanPro",
    description: "Professional cleaning services for homes and businesses",
    url: "https://avatarcleanpro.com",
    telephone: "+1-XXX-XXX-XXXX",
    email: "contact@avatarcleanpro.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "Your Zip",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0.0,
      longitude: 0.0,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
    image: "https://avatarcleanpro.com/images/logo.png",
    sameAs: [
      "https://facebook.com/avatarcleanpro",
      "https://instagram.com/avatarcleanpro",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema
export function ServiceSchema({ service }: { service: Service }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Avatar CleanPro",
    },
    areaServed: {
      "@type": "City",
      name: "Your City",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 3.4 Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avatarcleanpro.com";

  const routes = ["", "/services", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
```

### 3.5 Robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://avatarcleanpro.com/sitemap.xml",
  };
}
```

---

## 4. Performance Optimization

### 4.1 Component Loading Strategies

```typescript
// Dynamic imports for heavy components
import dynamic from "next/dynamic";

// Lazy load components not needed for initial render
const ContactForm = dynamic(() => import("@/components/forms/ContactForm"), {
  loading: () => <FormSkeleton />,
  ssr: true, // Enable SSR for SEO
});

// Disable SSR for client-only components
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});
```

### 4.2 React Server Components (RSC)

```typescript
// app/services/page.tsx - Server Component (default)
// Fetches data on the server, zero JavaScript sent to client
async function ServicesPage() {
  // This runs on the server
  const services = await getServices();

  return (
    <main>
      <h1>Our Services</h1>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </main>
  );
}

// components/ServiceCard.tsx - Can be Server Component if no interactivity
function ServiceCard({ service }: { service: Service }) {
  return (
    <article>
      <h2>{service.name}</h2>
      <p>{service.description}</p>
    </article>
  );
}

// components/forms/ContactForm.tsx - Client Component (needs interactivity)
"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Form logic...
}
```

### 4.3 Font Optimization

```typescript
// app/layout.tsx
import { Outfit, Lexend } from "next/font/google";

// Variable font with subsetting
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 4.4 Bundle Optimization

```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Reduce bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize packages
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },

  // Enable compression
  compress: true,
};

module.exports = nextConfig;
```

### 4.5 Code Splitting Best Practices

```typescript
// ❌ Avoid importing entire libraries
import * as Icons from "lucide-react";

// ✅ Import only what you need
import { Phone, Mail, MapPin } from "lucide-react";

// ❌ Avoid barrel exports for large modules
export * from "./components";

// ✅ Use direct imports
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
```

---

## 5. Image Optimization

### 5.1 Next.js Image Component

```typescript
import Image from "next/image";

// Hero image with priority loading
<Image
  src="/images/hero-cleaning.jpg"
  alt="Professional cleaning team at work"
  width={1920}
  height={1080}
  priority // Load immediately, above the fold
  quality={85}
  className="object-cover"
  sizes="100vw"
/>

// Responsive images
<Image
  src="/images/service-residential.jpg"
  alt="Residential cleaning service"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="rounded-lg"
/>

// Background images with fill
<div className="relative h-[600px] w-full">
  <Image
    src="/images/about-bg.jpg"
    alt=""
    fill
    className="object-cover"
    sizes="100vw"
  />
</div>
```

### 5.2 Image Configuration

```typescript
// next.config.js
module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
```

### 5.3 Image Best Practices

```markdown
## Image Optimization Checklist

- [ ] Use WebP/AVIF formats (Next.js handles this automatically)
- [ ] Provide accurate width/height to prevent layout shift
- [ ] Use `priority` for above-the-fold images (hero, logo)
- [ ] Use `sizes` attribute for responsive images
- [ ] Compress images before upload (aim for < 200KB for most images)
- [ ] Use meaningful alt text for accessibility and SEO
- [ ] Lazy load below-the-fold images (default behavior)
- [ ] Consider using blur placeholder for better UX
```

```typescript
// Blur placeholder example
<Image
  src="/images/service.jpg"
  alt="Cleaning service"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Generate with plaiceholder
/>
```

---

## 6. Caching Strategies

### 6.1 Static Generation (SSG)

```typescript
// app/services/page.tsx
// This page is statically generated at build time
export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate every 24 hours

async function ServicesPage() {
  const services = await getServices();
  return <ServicesList services={services} />;
}
```

### 6.2 Incremental Static Regeneration (ISR)

```typescript
// app/services/[slug]/page.tsx
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);
  return <ServiceDetails service={service} />;
}
```

### 6.3 Data Fetching with Cache

```typescript
// lib/data.ts

// Cached fetch (default behavior in Next.js 14+)
async function getServices() {
  const res = await fetch("https://api.example.com/services", {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  return res.json();
}

// No-store for dynamic data
async function getAvailability() {
  const res = await fetch("https://api.example.com/availability", {
    cache: "no-store",
  });
  return res.json();
}

// Using React cache for deduplication
import { cache } from "react";

export const getService = cache(async (id: string) => {
  const res = await fetch(`https://api.example.com/services/${id}`);
  return res.json();
});
```

### 6.4 Browser Caching Headers

```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
```

---

## 7. Code Quality & Standards

### 7.1 TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 7.2 ESLint Configuration

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "jsx-a11y"],
  rules: {
    // TypeScript
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",

    // React
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    // Accessibility
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],

    // Next.js
    "@next/next/no-img-element": "error",
  },
};
```

### 7.3 Prettier Configuration

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 7.4 Git Hooks with Husky

```json
// package.json
{
  "scripts": {
    "prepare": "husky install",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,css}": ["prettier --write"]
  }
}
```

---

## 8. Responsive Design

All components and pages must be fully responsive across all screen sizes.

### 8.1 Mobile-First Development

Always write styles mobile-first, then add responsive modifiers:

```tsx
// ✅ Mobile-first (correct)
<div className="p-4 md:p-6 lg:p-8">
  <h1 className="text-2xl md:text-3xl lg:text-4xl">Title</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Cards */}
  </div>
</div>

// ❌ Desktop-first (avoid)
<div className="p-8 md:p-6 sm:p-4">
```

### 8.2 Tailwind Breakpoints

| Prefix | Min Width | CSS | Target |
|--------|-----------|-----|--------|
| (none) | 0px | `@media (min-width: 0px)` | Mobile phones |
| `sm` | 640px | `@media (min-width: 640px)` | Large phones |
| `md` | 768px | `@media (min-width: 768px)` | Tablets |
| `lg` | 1024px | `@media (min-width: 1024px)` | Laptops |
| `xl` | 1280px | `@media (min-width: 1280px)` | Desktops |
| `2xl` | 1536px | `@media (min-width: 1536px)` | Large screens |

### 8.3 Responsive Patterns

#### Container Component

```tsx
// components/ui/container.tsx
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl",
      className
    )}>
      {children}
    </div>
  );
}
```

#### Responsive Grid

```tsx
// 1 → 2 → 3 → 4 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

// Sidebar layout
<div className="flex flex-col lg:flex-row gap-8">
  <aside className="w-full lg:w-1/3">Sidebar</aside>
  <main className="w-full lg:w-2/3">Content</main>
</div>
```

#### Responsive Navigation

```tsx
// Header with mobile/desktop nav
<header className="sticky top-0 z-50">
  <nav className="container flex h-16 items-center justify-between">
    <Logo />
    
    {/* Mobile menu button */}
    <Button className="lg:hidden" variant="ghost" size="icon">
      <Menu className="h-6 w-6" />
    </Button>
    
    {/* Desktop navigation */}
    <div className="hidden lg:flex items-center gap-6">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
</header>
```

#### Show/Hide Elements

```tsx
// Different content per breakpoint
<span className="lg:hidden">Menu</span>
<span className="hidden lg:inline">Navigation Menu</span>

// Completely different components
<MobileNav className="lg:hidden" />
<DesktopNav className="hidden lg:flex" />
```

### 8.4 Responsive Typography

Use fluid typography with `clamp()`:

```css
/* globals.css */
:root {
  --text-base: clamp(1rem, 0.925rem + 0.375vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.375rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 3rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 4rem);
}
```

### 8.5 Touch-Friendly Targets

Ensure all interactive elements meet minimum touch target sizes:

```tsx
// Minimum 44x44px touch targets
<button className="min-h-[44px] min-w-[44px] p-3">
  <Icon className="h-5 w-5" />
</button>

// Larger tap areas for mobile navigation
<Link className="block py-3 px-4 md:py-2 md:px-3">
  Menu Item
</Link>
```

### 8.6 Responsive Images

```tsx
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Description"
  width={1920}
  height={1080}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  className="w-full h-auto object-cover"
  priority // For above-the-fold images
/>
```

### 8.7 Testing Responsive Designs

```tsx
// Test at these viewport widths:
// - 320px (small phone)
// - 375px (iPhone)
// - 414px (large phone)
// - 768px (tablet portrait)
// - 1024px (tablet landscape / small laptop)
// - 1280px (desktop)
// - 1536px (large desktop)

// Browser DevTools responsive mode
// Chrome: Cmd/Ctrl + Shift + M
```

### 8.8 Responsive Checklist

- [ ] All pages tested on mobile (320px - 640px)
- [ ] All pages tested on tablet (768px - 1024px)
- [ ] All pages tested on desktop (1280px+)
- [ ] Navigation works on all screen sizes
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling on mobile
- [ ] Images scale properly
- [ ] Forms are usable on mobile
- [ ] Modals/dialogs are mobile-friendly

---

## 9. Accessibility (a11y)

### 8.1 Semantic HTML

```typescript
// ✅ Use semantic HTML elements
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Our Cleaning Services</h1>
    <section aria-labelledby="residential-heading">
      <h2 id="residential-heading">Residential Cleaning</h2>
      <p>...</p>
    </section>
  </article>
</main>

<footer>
  <address>Contact information...</address>
</footer>
```

### 8.2 Focus Management

```typescript
// components/ui/skip-link.tsx
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
    >
      Skip to main content
    </a>
  );
}

// In layout.tsx
<body>
  <SkipLink />
  <Header />
  <main id="main-content" tabIndex={-1}>
    {children}
  </main>
  <Footer />
</body>
```

### 8.3 ARIA Attributes

```typescript
// Loading states
<button disabled={isLoading} aria-busy={isLoading}>
  {isLoading ? (
    <>
      <Spinner aria-hidden="true" />
      <span className="sr-only">Sending message...</span>
    </>
  ) : (
    "Send Message"
  )}
</button>

// Form errors
<input
  id="email"
  type="email"
  aria-invalid={errors.email ? "true" : "false"}
  aria-describedby={errors.email ? "email-error" : undefined}
/>
{errors.email && (
  <span id="email-error" role="alert" className="text-red-500">
    {errors.email.message}
  </span>
)}
```

### 8.4 Color Contrast

```css
/* Ensure sufficient contrast ratios */
/* WCAG AA: 4.5:1 for normal text, 3:1 for large text */
/* WCAG AAA: 7:1 for normal text, 4.5:1 for large text */

:root {
  /* Primary colors with good contrast */
  --primary: 210 100% 40%; /* Blue with good contrast on white */
  --primary-foreground: 0 0% 100%;

  /* Ensure text has sufficient contrast */
  --foreground: 222.2 84% 4.9%;
  --muted-foreground: 215.4 16.3% 30%; /* Darker than default for better contrast */
}
```

---

## 10. Environment & Configuration

### 9.1 Environment Variables Structure

```bash
# .env.local (local development - never commit)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key

# .env.example (commit this for documentation)
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_SITE_URL=

# Client-side variables must start with NEXT_PUBLIC_
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 9.2 Site Configuration

```typescript
// config/site.ts
export const siteConfig = {
  name: "Avatar CleanPro",
  description: "Professional cleaning services for homes and businesses",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://avatarcleanpro.com",
  ogImage: "/images/og-image.jpg",
  links: {
    facebook: "https://facebook.com/avatarcleanpro",
    instagram: "https://instagram.com/avatarcleanpro",
  },
  contact: {
    email: "contact@avatarcleanpro.com",
    phone: "+1-XXX-XXX-XXXX",
    address: "Your Business Address",
  },
  businessHours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
  },
} as const;
```

---

## 11. Deployment Best Practices

### 10.1 Pre-Deployment Checklist

```markdown
## Deployment Checklist

### Performance
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Check Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Verify images are optimized
- [ ] Test on slow 3G network

### SEO
- [ ] Verify meta tags on all pages
- [ ] Test Open Graph tags (use Facebook debugger)
- [ ] Verify sitemap.xml is accessible
- [ ] Check robots.txt
- [ ] Verify structured data (use Google Rich Results Test)

### Security
- [ ] Remove console.log statements
- [ ] Verify environment variables are set
- [ ] Test CSP headers
- [ ] Check for exposed sensitive data

### Functionality
- [ ] Test contact form submission
- [ ] Verify all links work
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Test 404 page

### Accessibility
- [ ] Run accessibility audit
- [ ] Test keyboard navigation
- [ ] Verify screen reader compatibility
```

### 10.2 Vercel Configuration

```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm ci",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## 12. Monitoring & Analytics

### 11.1 Web Vitals Monitoring

```typescript
// app/components/WebVitals.tsx
"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to your analytics service
    console.log(metric);

    // Example: Send to Google Analytics
    if (typeof window.gtag === "function") {
      window.gtag("event", metric.name, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}
```

### 11.2 Error Tracking

```typescript
// lib/error-tracking.ts
export function reportError(error: Error, context?: Record<string, any>) {
  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.error("Error:", error, context);
    return;
  }

  // In production, send to error tracking service (e.g., Sentry)
  // Sentry.captureException(error, { extra: context });
}

// app/error.tsx
"use client";

import { useEffect } from "react";
import { reportError } from "@/lib/error-tracking";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportError(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

---

## 13. Testing Strategies

### 12.1 Unit Testing with Jest

```typescript
// __tests__/utils.test.ts
import { formatPhoneNumber, validateEmail } from "@/lib/utils";

describe("formatPhoneNumber", () => {
  it("formats a 10-digit number correctly", () => {
    expect(formatPhoneNumber("1234567890")).toBe("(123) 456-7890");
  });
});

describe("validateEmail", () => {
  it("returns true for valid emails", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  it("returns false for invalid emails", () => {
    expect(validateEmail("invalid-email")).toBe(false);
  });
});
```

### 12.2 Component Testing with React Testing Library

```typescript
// __tests__/components/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "@/components/forms/ContactForm";

describe("ContactForm", () => {
  it("displays validation errors for empty fields", async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it("submits the form with valid data", async () => {
    const mockSubmit = jest.fn();
    render(<ContactForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a test message" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
```

### 12.3 E2E Testing with Playwright

```typescript
// e2e/contact.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test("should display the contact form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: /contact us/i })).toBeVisible();
    await expect(page.getByRole("form")).toBeVisible();
  });

  test("should show success message on form submission", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel(/name/i).fill("John Doe");
    await page.getByLabel(/email/i).fill("john@example.com");
    await page.getByLabel(/message/i).fill("This is a test message from Playwright");

    await page.getByRole("button", { name: /send/i }).click();

    await expect(page.getByText(/message sent successfully/i)).toBeVisible();
  });
});
```

---

## Quick Reference Cheatsheet

| Task | Best Practice |
|------|---------------|
| **Images** | Use `next/image` with proper `width`, `height`, and `sizes` |
| **Fonts** | Use `next/font` with `display: swap` |
| **Data Fetching** | Server Components + `fetch` with caching |
| **Forms** | Server Actions + Zod validation |
| **Styling** | Tailwind CSS + CSS variables for theming |
| **Components** | shadcn/ui for consistent, accessible UI |
| **Icons** | Import individually from lucide-react |
| **SEO** | Metadata API + JSON-LD structured data |
| **Security** | Validate input, sanitize output, use CSP |
| **Performance** | Measure with Lighthouse, monitor Web Vitals |

---

*Last Updated: January 2026*
*Next.js Version: 14.x / 15.x*
