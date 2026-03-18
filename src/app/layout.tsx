import type { Metadata, Viewport } from "next";
import { Lexend, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/providers";
import { SkipLink } from "@/components/common";
import { FloatingSocial } from "@/components/common/FloatingSocial";
import { BrowserCompatibility, BrowserErrorBoundary } from "@/components/common/BrowserCompatibility";
import { LocalBusinessSchema, WebsiteSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { Header, Footer } from "@/components/layout";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name + " | Professional Cleaning Services in Nairobi, Kenya",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Primary keywords
    ...siteConfig.keywords.primary,
    // Secondary keywords
    ...siteConfig.keywords.secondary,
    // Local keywords
    ...siteConfig.keywords.local,
    // Service-specific keywords
    "mama fua services",
    "cleaning school training",
    "eco-friendly cleaning",
    "residential cleaning",
    "commercial cleaning"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name + " | Professional Cleaning Services in Nairobi, Kenya",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name + " - Professional Cleaning Services in Nairobi, Kenya",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name + " | Professional Cleaning Services in Nairobi, Kenya",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@avatarcleanpro",
    site: "@avatarcleanpro",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${lexend.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Browser compatibility meta tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Avatar CleanPro" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured data for SEO */}
        <LocalBusinessSchema />
        <WebsiteSchema />
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <BrowserErrorBoundary>
          <BrowserCompatibility />
          <ThemeProvider>
            <SkipLink />
            <Header />
            <main id="main-content" tabIndex={-1} className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingSocial />
          </ThemeProvider>
        </BrowserErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
