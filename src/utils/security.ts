import { randomBytes, timingSafeEqual } from 'crypto';

// CSRF Token Management
export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex');
}

export function validateCSRFToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken) return false;
  if (token.length !== sessionToken.length) return false;
  
  // Use timing-safe comparison to prevent timing attacks
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(sessionToken));
  } catch (error) {
    console.error('CSRF validation error:', error);
    return false;
  }
}

// Input Sanitization
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<[^>]*>/g, '') // Better HTML tag removal
    .replace(/javascript:/gi, 'blocked:') // Replace javascript: protocol
    .replace(/data:/gi, 'blocked:') // Block data: URIs
    .replace(/on\w+\s*=/gi, 'data-blocked=') // Replace event handlers
    .substring(0, 1000); // Limit length
}

export function sanitizeEmail(email: string): string {
  if (!email || typeof email !== 'string') return '';
  
  return email
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9@._-]/g, '') // Only allow safe characters
    .substring(0, 254); // RFC 5321 limit
}

// Content Security Policy helper
export function getCSPHeader(): string {
  return [
    "default-src 'self'",
    // Allow inline scripts and scripts from Calendly
    "script-src 'self' 'unsafe-inline' https://assets.calendly.com",
    "style-src 'self' 'unsafe-inline'", // Allow inline styles for now
    "img-src 'self' data: https:",
    "font-src 'self'",
    // Allow connections to Calendly and its analytics service (Datadog)
    "connect-src 'self' https://calendly.com https://*.datadoghq.com",
    // Allow Calendly to be embedded as a frame
    "frame-src 'self' https://calendly.com",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'"
  ].join('; ');
}

// Permissions Policy helper
export function getPermissionsPolicyHeader(): string {
  return [
    'accelerometer=()',
    'autoplay=()',
    'camera=()',
    'display-capture=()',
    'encrypted-media=()',
    'fullscreen=()',
    'gamepad=()',
    'geolocation=()',
    'gyroscope=()',
    'magnetometer=()',
    'microphone=()',
    'midi=()',
    'payment=()', // Explicitly disable payment
    'picture-in-picture=()',
    'publickey-credentials-get=()',
    'sync-xhr=()',
    'usb=()',
    'screen-wake-lock=()',
    'web-share=()',
    'xr-spatial-tracking=()'
  ].join(', ');
}

// Rate Limiting (simple in-memory store for demo)
// In production, use Redis or another persistent store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up expired rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Clean up every minute

export function checkRateLimit(ip: string, maxRequests: number = 10, windowMs: number = 60000): boolean {
  if (!ip) return false;
  
  const now = Date.now();
  const key = ip;
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Clean up expired rate limit records
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 300000); // Clean up every 5 minutes
