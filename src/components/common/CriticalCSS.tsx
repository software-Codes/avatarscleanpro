/**
 * Enhanced Critical CSS for above-the-fold content
 * Inlined for performance, accessibility, and robust mobile/desktop optimizations
 */
export function CriticalCSS() {
  return (
    <style jsx>{`
      /* --- Critical styles for above-the-fold content --- */
      .hero-section {
        min-height: calc(100vh - 4rem);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        background: var(--hero-bg, #f8fafc);
        z-index: 1;
      }

      .hero-title {
        font-size: 3rem;
        font-weight: 700;
        color: var(--hero-title, #222);
        margin-bottom: 1rem;
        line-height: 1.1;
        letter-spacing: -0.02em;
      }

      /* Prevent layout shift for hero image */
      .hero-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        user-select: none;
        z-index: 0;
      }

      /* Critical button styles */
      .cta-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 52px;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        background: var(--cta-bg, #2563eb);
        color: var(--cta-color, #fff);
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        cursor: pointer;
        transition:
          background 0.2s,
          color 0.2s,
          box-shadow 0.2s;
      }
      .cta-button:focus {
        outline: 2px solid #2563eb;
        outline-offset: 2px;
      }
      .cta-button:hover {
        background: #1d4ed8;
        color: #fff;
      }

      /* Prevent flash of unstyled content */
      .fade-in {
        animation: fadeIn 0.6s ease-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Accessibility: visually hidden for screen readers */
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      /* Mobile optimizations */
      @media (max-width: 768px) {
        .hero-section {
          min-height: calc(100vh - 3rem);
          padding: 1rem;
        }
        .hero-title {
          font-size: 2.2rem;
        }
        .cta-button {
          min-height: 44px;
          padding: 0.5rem 1rem;
        }
      }

      /* Desktop optimizations */
      @media (min-width: 1200px) {
        .hero-title {
          font-size: 4rem;
        }
      }
    `}</style>
  );
}
