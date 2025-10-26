const supportedLocales = ['nl', 'en'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

const defaultLocale: SupportedLocale = 'nl';
const homeSlug = 'home';

type PagesContext = {
  request: Request;
  next: () => Promise<Response>;
};

export const onRequest = async ({ request, next }: PagesContext): Promise<Response> => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    return next();
  }

  const url = new URL(request.url);

  if (!isRootPath(url.pathname)) {
    return next();
  }

  const cookieLang = extractLocaleFromCookie(request.headers.get('cookie'));
  const negotiatedLang = negotiateLocale(request.headers.get('accept-language'));

  const locale: SupportedLocale = cookieLang || negotiatedLang || defaultLocale;
  const targetPath = `/${locale}/${homeSlug}`;

  // Avoid redirect loops if we are already on the desired path.
  if (normalizePath(url.pathname) === targetPath) {
    return next();
  }

  const targetUrl = new URL(targetPath, url);
  targetUrl.search = url.search;

  return Response.redirect(targetUrl, 308);
};

function isRootPath(pathname: string): boolean {
  const normalized = normalizePath(pathname);
  return normalized === '/' || normalized === '/index.html';
}

function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  if (pathname === '') return '/';
  if (!pathname.startsWith('/')) {
    return `/${pathname}`;
  }
  return pathname;
}

function extractLocaleFromCookie(header: string | null): SupportedLocale | null {
  if (!header) return null;

  const cookies = header.split(';');
  for (const cookie of cookies) {
    const [rawName, rawValue] = cookie.split('=');
    if (!rawName) continue;
    if (rawName.trim() !== 'preferred_lang') continue;

    const value = decodeURIComponent((rawValue ?? '').trim().toLowerCase());
    if (isSupportedLocale(value)) {
      return value;
    }
  }

  return null;
}

function negotiateLocale(header: string | null): SupportedLocale | null {
  if (!header) return null;

  const candidates = header
    .split(',')
    .map((part) => {
      const [langPart, ...params] = part.trim().split(';');
      if (!langPart) {
        return null;
      }

      let quality = 1;
      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q' && value) {
          const parsed = Number(value);
          if (!Number.isNaN(parsed)) {
            quality = parsed;
          }
        }
      }

      return {
        lang: langPart.toLowerCase(),
        quality,
      };
    })
    .filter((entry): entry is { lang: string; quality: number } => Boolean(entry))
    .sort((a, b) => b.quality - a.quality);

  for (const candidate of candidates) {
    if (isSupportedLocale(candidate.lang)) {
      return candidate.lang;
    }

    const base = candidate.lang.split('-')[0];
    if (isSupportedLocale(base)) {
      return base;
    }
  }

  return null;
}

function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  if (!value) return false;
  return (supportedLocales as readonly string[]).includes(value);
}
