/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    poweredByHeader: false,
    
    // Enhanced image optimization for all browsers
    images: {
        formats: ["image/avif", "image/webp", "image/jpeg"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        qualities: [75, 85, 90],
        minimumCacheTTL: 31536000, // 1 year
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    
    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
        reactRemoveProperties: process.env.NODE_ENV === "production",
    },
    
    // Performance optimizations
    experimental: {
        optimizePackageImports: ["lucide-react", "@radix-ui/react-dialog", "@radix-ui/react-navigation-menu"],
        optimizeCss: true,
        webVitalsAttribution: ["CLS", "LCP"],
    },
    
    // Headers for better browser compatibility and security
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    // Security headers
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
                        value: "origin-when-cross-origin",
                    },
                    // Performance headers
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                ],
            },
            {
                source: "/images/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                source: "/(.*\\.(js|css|woff|woff2|ttf|otf))",
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

export default nextConfig;
