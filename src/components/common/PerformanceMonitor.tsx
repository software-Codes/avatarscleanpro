"use client";
import { useEffect } from "react";

/**
 * Performance monitoring component for Core Web Vitals
 * Tracks and reports performance metrics
 */
export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Web Vitals tracking
    if ("PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime);
            // Send to analytics if needed
          }
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "first-input") {
            const fid =
              (entry as any).processingStart - (entry as any).startTime;
            console.log("FID:", fid);
            // Send to analytics if needed
          }
        }
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (
            entry.entryType === "layout-shift" &&
            !(entry as any).hadRecentInput
          ) {
            console.log("CLS:", (entry as any).value);
            // Send to analytics if needed
          }
        }
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    }

    // Resource loading optimization
    const optimizeResources = () => {
      // Preload next page resources on hover
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          const href = link.getAttribute("href");
          if (
            href &&
            !document.querySelector(`link[rel='prefetch'][href='${href}']`)
          ) {
            const prefetchLink = document.createElement("link");
            prefetchLink.rel = "prefetch";
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    };

    // Run after initial load
    setTimeout(optimizeResources, 1000);
  }, []);

  return null;
}
