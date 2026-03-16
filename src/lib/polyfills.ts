/**
 * Browser Polyfills for Avatar CleanPro
 * Ensures compatibility across all modern browsers
 */

// Simple polyfills that don't require external packages

// Intersection Observer polyfill for older browsers
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  console.log('IntersectionObserver not supported, using fallback');
  // Simple fallback - elements are always considered visible
  (window as any).IntersectionObserver = class {
    private callback: any;
    
    constructor(callback: any) {
      this.callback = callback;
    }
    observe() {
      // Fallback: assume element is always intersecting
    }
    unobserve() {}
    disconnect() {}
  };
}

// ResizeObserver polyfill for older browsers
if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  console.log('ResizeObserver not supported, using fallback');
  // Simple fallback using window resize
  (window as any).ResizeObserver = class {
    private callback: any;
    private elements: Set<Element>;
    
    constructor(callback: any) {
      this.callback = callback;
      this.elements = new Set();
    }
    observe(element: Element) {
      this.elements.add(element);
      if (this.elements.size === 1) {
        window.addEventListener('resize', this.handleResize.bind(this));
      }
    }
    unobserve(element: Element) {
      this.elements.delete(element);
      if (this.elements.size === 0) {
        window.removeEventListener('resize', this.handleResize.bind(this));
      }
    }
    disconnect() {
      this.elements.clear();
      window.removeEventListener('resize', this.handleResize.bind(this));
    }
    private handleResize() {
      // Simple fallback - call callback for all observed elements
      this.callback([]);
    }
  };
}

// Smooth scrolling polyfill for Safari and older browsers
if (typeof window !== 'undefined') {
  // Check if smooth scrolling is supported
  const testElement = document.createElement('div');
  testElement.style.scrollBehavior = 'smooth';
  
  if (!testElement.style.scrollBehavior) {
    console.log('Smooth scrolling not supported, adding polyfill');
    
    // Simple smooth scroll polyfill
    const smoothScrollTo = (element: Element, options: ScrollIntoViewOptions = {}) => {
      if (options.behavior === 'smooth') {
        const start = window.pageYOffset;
        const target = element.getBoundingClientRect().top + start;
        const duration = 500;
        const startTime = performance.now();
        
        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeInOutQuad = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;
          
          window.scrollTo(0, start + (target - start) * easeInOutQuad);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
        
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollIntoView();
      }
    };
    
    // Override scrollIntoView for smooth scrolling
    Element.prototype.scrollIntoView = function(options?: boolean | ScrollIntoViewOptions) {
      if (typeof options === 'object' && options.behavior === 'smooth') {
        smoothScrollTo(this, options);
      } else {
        // Use native implementation for non-smooth scrolling
        const nativeScrollIntoView = Element.prototype.scrollIntoView;
        nativeScrollIntoView.call(this, options);
      }
    };
  }
}

// CSS Custom Properties (CSS Variables) support detection
if (typeof window !== 'undefined') {
  const supportsCustomProperties = window.CSS && window.CSS.supports && window.CSS.supports('--fake-var', '0');
  
  if (!supportsCustomProperties) {
    console.warn('CSS Custom Properties not supported. Using fallback values.');
    // Add a class to indicate lack of support
    document.documentElement.classList.add('no-css-custom-properties');
  }
}

// Focus-visible polyfill for better keyboard navigation
if (typeof window !== 'undefined') {
  let hadKeyboardEvent = true;
  const keyboardThrottleTimeout = 100;
  
  function onPointerDown() {
    hadKeyboardEvent = false;
  }
  
  function onKeyDown(e: KeyboardEvent) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    hadKeyboardEvent = true;
  }
  
  function onFocus(e: FocusEvent) {
    if (hadKeyboardEvent || (e.target as Element).matches(':focus-visible')) {
      (e.target as Element).classList.add('focus-visible');
    }
  }
  
  function onBlur(e: FocusEvent) {
    (e.target as Element).classList.remove('focus-visible');
  }
  
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  
  console.log('Focus-visible polyfill loaded');
}

export {};