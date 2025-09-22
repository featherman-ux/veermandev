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
    // In production, integrate with your analytics service
    // Example: Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        custom_map: {
          metric_name: 'metric_name',
          metric_value: 'metric_value'
        }
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

// Utility functions
export function measurePageLoad() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      performanceMonitor['recordMetric']('DOMContentLoaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
      performanceMonitor['recordMetric']('LoadComplete', navigation.loadEventEnd - navigation.loadEventStart);
    }
  });
}

export function measureUserInteraction(element: HTMLElement, eventName: string) {
  const startTime = performance.now();
  
  element.addEventListener(eventName, () => {
    const endTime = performance.now();
    performanceMonitor['recordMetric'](`UserInteraction_${eventName}`, endTime - startTime);
  }, { once: true });
}

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  measurePageLoad();
}
