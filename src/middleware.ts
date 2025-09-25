import { defineMiddleware } from 'astro:middleware';
import { defaultLang, ui } from './i18n/ui';
import { getCSPHeader, getPermissionsPolicyHeader } from './utils/security';

const supportedLangs = Object.keys(ui);

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, request, redirect } = context;

  // Note: Security headers will be set at the server level (Cloudflare)
  // This is a placeholder for future server-level security implementation

  // Exit early if it's not a page request (e.g., API, assets, etc.)
  if (url.pathname.includes('.')) {
    return next();
  }

  // Check if the language is already set in a cookie
  const langCookie = cookies.get('language')?.value;
  if (langCookie && supportedLangs.includes(langCookie)) {
    // User already has a language preference → continue
    return next();
  }

  // Only perform detection on the root path (first visit)
  if (url.pathname === '/') {
    const countryHeader =
      request.headers.get('cf-ipcountry') ||
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('x-country-code') ||
      request.headers.get('x-country');

    const geoLang = countryHeader && countryHeader.toUpperCase() === 'NL' ? 'nl' : undefined;

    const acceptLanguage = request.headers.get('accept-language') ?? '';
    const preferredLang = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => supportedLangs.includes(lang));

    const targetLang = (geoLang && supportedLangs.includes(geoLang)
      ? geoLang
      : preferredLang) ?? defaultLang;

    cookies.set('language', targetLang, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
      httpOnly: true,
      secure: url.protocol === 'https:',
      sameSite: 'lax'
    });

    return redirect(`/${targetLang}/home`, 307);
  }
  
  // If we reach here, continue with the request and set security headers
  const response = await next();
  try {
    response.headers.set('Content-Security-Policy', getCSPHeader());
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', getPermissionsPolicyHeader());
  } catch {}
  return response;
});
