"use client";

import { useEffect } from 'react';
import { initBrowserCompatibility } from '@/lib/browser';

/**
 * Browser Compatibility Initializer
 * Runs browser detection and compatibility setup on the client side
 */
export function BrowserCompatibility() {
  useEffect(() => {
    // Initialize browser compatibility features
    initBrowserCompatibility();
    
    // Add performance observer for Core Web Vitals (if supported)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Log performance metrics in development
            if (process.env.NODE_ENV === 'development') {
              // Different entry types have different properties
              if (entry.entryType === 'largest-contentful-paint') {
                console.log(`${entry.name}: ${(entry as any).startTime}ms`);
              } else if (entry.entryType === 'first-input') {
                console.log(`${entry.name}: ${(entry as any).processingStart - (entry as any).startTime}ms`);
              } else if (entry.entryType === 'layout-shift') {
                console.log(`${entry.name}: ${(entry as any).value}`);
              }
            }
            
            // You can send these metrics to analytics here
            // Example: analytics.track('web-vital', { name: entry.name, value: entry.value });
          }
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }
    }
    
    // Add viewport height CSS custom property for mobile browsers
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);
  
  return null; // This component doesn't render anything
}

/**
 * Error Boundary for browser compatibility issues
 */
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class BrowserErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Browser compatibility error:', error, errorInfo);
    
    // You can log this to an error reporting service
    // Example: errorReporting.captureException(error, { extra: errorInfo });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md mx-auto text-center p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Browser Compatibility Issue
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but there seems to be a compatibility issue with your browser. 
              Please try updating your browser or using a different one.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>Supported browsers:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Chrome 88+</li>
                <li>Firefox 85+</li>
                <li>Safari 14+</li>
                <li>Edge 88+</li>
              </ul>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    
    return this.props.children;
  }
}