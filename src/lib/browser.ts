/**
 * Browser Detection and Feature Support Utilities
 * Helps optimize the application for different browsers
 */

export interface BrowserInfo {
  name: string;
  version: string;
  isChrome: boolean;
  isFirefox: boolean;
  isSafari: boolean;
  isEdge: boolean;
  isIE: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  supportsWebP: boolean;
  supportsAVIF: boolean;
  supportsIntersectionObserver: boolean;
  supportsResizeObserver: boolean;
  supportsCSSGrid: boolean;
  supportsCustomProperties: boolean;
}

/**
 * Detect browser information and capabilities
 */
export function getBrowserInfo(): BrowserInfo {
  if (typeof window === 'undefined') {
    // Server-side fallback
    return {
      name: 'unknown',
      version: '0',
      isChrome: false,
      isFirefox: false,
      isSafari: false,
      isEdge: false,
      isIE: false,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      supportsWebP: false,
      supportsAVIF: false,
      supportsIntersectionObserver: false,
      supportsResizeObserver: false,
      supportsCSSGrid: false,
      supportsCustomProperties: false,
    };
  }

  const userAgent = navigator.userAgent;
  const isChrome = /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor);
  const isFirefox = /Firefox/.test(userAgent);
  const isSafari = /Safari/.test(userAgent) && /Apple Computer/.test(navigator.vendor);
  const isEdge = /Edg/.test(userAgent);
  const isIE = /MSIE|Trident/.test(userAgent);
  
  // Device detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  // Feature detection
  const supportsWebP = checkWebPSupport();
  const supportsAVIF = checkAVIFSupport();
  const supportsIntersectionObserver = 'IntersectionObserver' in window;
  const supportsResizeObserver = 'ResizeObserver' in window;
  const supportsCSSGrid = window.CSS && window.CSS.supports ? window.CSS.supports('display', 'grid') : false;
  const supportsCustomProperties = window.CSS && window.CSS.supports ? window.CSS.supports('--fake-var', '0') : false;

  // Extract browser name and version
  let name = 'unknown';
  let version = '0';

  if (isChrome) {
    name = 'chrome';
    const match = userAgent.match(/Chrome\/(\d+)/);
    version = match?.[1] || '0';
  } else if (isFirefox) {
    name = 'firefox';
    const match = userAgent.match(/Firefox\/(\d+)/);
    version = match?.[1] || '0';
  } else if (isSafari) {
    name = 'safari';
    const match = userAgent.match(/Version\/(\d+)/);
    version = match?.[1] || '0';
  } else if (isEdge) {
    name = 'edge';
    const match = userAgent.match(/Edg\/(\d+)/);
    version = match?.[1] || '0';
  } else if (isIE) {
    name = 'ie';
    const match = userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    version = match?.[1] || '0';
  }

  return {
    name,
    version,
    isChrome,
    isFirefox,
    isSafari,
    isEdge,
    isIE,
    isMobile,
    isTablet,
    isDesktop,
    supportsWebP,
    supportsAVIF,
    supportsIntersectionObserver,
    supportsResizeObserver,
    supportsCSSGrid,
    supportsCustomProperties,
  };
}

/**
 * Check WebP support
 */
function checkWebPSupport(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } catch {
    return false;
  }
}

/**
 * Check AVIF support
 */
function checkAVIFSupport(): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  } catch {
    return false;
  }
}

/**
 * Get optimal image format based on browser support
 */
export function getOptimalImageFormat(): 'avif' | 'webp' | 'jpeg' {
  const browser = getBrowserInfo();
  
  if (browser.supportsAVIF) return 'avif';
  if (browser.supportsWebP) return 'webp';
  return 'jpeg';
}

/**
 * Check if browser needs polyfills
 */
export function needsPolyfills(): boolean {
  const browser = getBrowserInfo();
  
  return (
    !browser.supportsIntersectionObserver ||
    !browser.supportsResizeObserver ||
    !browser.supportsCSSGrid ||
    !browser.supportsCustomProperties ||
    browser.isIE
  );
}

/**
 * Load polyfills conditionally
 */
export async function loadPolyfillsIfNeeded(): Promise<void> {
  if (!needsPolyfills()) return;
  
  try {
    await import('./polyfills');
    console.log('Polyfills loaded successfully');
  } catch (error) {
    console.warn('Failed to load polyfills:', error);
  }
}

/**
 * Add browser-specific CSS classes to document
 */
export function addBrowserClasses(): void {
  if (typeof window === 'undefined') return;
  
  const browser = getBrowserInfo();
  const classes = [];
  
  // Browser classes
  classes.push(`browser-${browser.name}`);
  classes.push(`browser-${browser.name}-${browser.version}`);
  
  // Device classes
  if (browser.isMobile) classes.push('device-mobile');
  if (browser.isTablet) classes.push('device-tablet');
  if (browser.isDesktop) classes.push('device-desktop');
  
  // Feature classes
  if (browser.supportsWebP) classes.push('supports-webp');
  if (browser.supportsAVIF) classes.push('supports-avif');
  if (browser.supportsCSSGrid) classes.push('supports-grid');
  if (browser.supportsCustomProperties) classes.push('supports-custom-properties');
  
  // Add classes to document
  document.documentElement.classList.add(...classes);
}

/**
 * Initialize browser compatibility features
 */
export function initBrowserCompatibility(): void {
  if (typeof window === 'undefined') return;
  
  // Add browser classes
  addBrowserClasses();
  
  // Load polyfills if needed
  loadPolyfillsIfNeeded();
  
  // Log browser info in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Browser Info:', getBrowserInfo());
  }
}