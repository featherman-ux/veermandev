// Performance monitoring and analytics utilities

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
  }

  private observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('LCP', lastEntry.startTime);
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP monitoring not supported:', error);
    }
  }

  private observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            this.recordMetric('FID', entry.processingStart - entry.startTime);
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FID monitoring not supported:', error);
    }
  }

  private observeCLS() {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.recordMetric('CLS', clsValue);
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('CLS monitoring not supported:', error);
    }
  }

  private observeFCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.recordMetric('FCP', entry.startTime);
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FCP monitoring not supported:', error);
    }
  }

  private recordMetric(name: string, value: number) {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now()
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }

    // In production, send to analytics service
    this.sendToAnalytics(name, value);
  }

  private sendToAnalytics(name: string, value: number) {
    // Veerman Web Development specific analytics configuration
    if (typeof window !== 'undefined') {
      // Send to Google Analytics 4 if available
      if ('gtag' in window) {
        (window as any).gtag('event', 'web_vital', {
          event_category: 'Performance',
          event_label: name,
          value: Math.round(value),
          custom_parameter_1: 'veerman_webdev',
          page_location: window.location.href,
          page_title: document.title
        });
      }

      // Custom analytics for Veerman Web Development
      // Track specific business metrics
      if (name === 'LCP' && value > 2500) {
        console.warn('LCP is above 2.5s threshold - consider optimizing images and critical resources');
      }
      
      if (name === 'CLS' && value > 0.1) {
        console.warn('CLS is above 0.1 threshold - check for layout shifts in hero sections');
      }

      // Send to custom endpoint for detailed analysis
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value: value,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          viewport: {
            width: window.innerWidth,
            height: window.innerHeight
          }
        })
      }).catch(() => {
        // Silently fail - analytics shouldn't break the site
      });
    }
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getMetricByName(name: string): PerformanceMetric | undefined {
    return this.metrics.find(metric => metric.name === name);
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions for Veerman Web Development
export function measurePageLoad() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      performanceMonitor['recordMetric']('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      performanceMonitor['recordMetric']('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
      
      // Track specific metrics for web development business
      const totalLoadTime = navigation.loadEventEnd - navigation.fetchStart;
      if (totalLoadTime > 3000) {
        console.warn('Page load time exceeds 3s - this may impact client satisfaction');
      }
    }
  });
}

export function measureUserInteraction(element: HTMLElement, eventName: string) {
  const startTime = performance.now();
  
  element.addEventListener(eventName, () => {
    const endTime = performance.now();
    const interactionTime = endTime - startTime;
    performanceMonitor['recordMetric'](`UserInteraction_${eventName}`, interactionTime);
    
    // Track business-critical interactions
    if (element.id === 'contact-form' && eventName === 'submit') {
      performanceMonitor['recordMetric']('ContactFormSubmission', interactionTime);
    }
    
    if (element.classList.contains('cta-button')) {
      performanceMonitor['recordMetric']('CTAClick', interactionTime);
    }
  }, { once: true });
}

// Track conversion-focused metrics for Veerman Web Development
export function trackBusinessMetrics() {
  if (typeof window === 'undefined') return;

  // Track contact form interactions
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    measureUserInteraction(contactForm, 'submit');
  }

  // Track CTA button clicks
  const ctaButtons = document.querySelectorAll('.cta-button, [data-cta]');
  ctaButtons.forEach(button => {
    measureUserInteraction(button as HTMLElement, 'click');
  });

  // Track portfolio item views
  const portfolioItems = document.querySelectorAll('[data-portfolio-item]');
  portfolioItems.forEach(item => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          performanceMonitor['recordMetric']('PortfolioItemView', performance.now());
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(item);
  });
}

// Initialize performance monitoring for Veerman Web Development
if (typeof window !== 'undefined') {
  measurePageLoad();
  
  // Initialize business metrics tracking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackBusinessMetrics);
  } else {
    trackBusinessMetrics();
  }
}
