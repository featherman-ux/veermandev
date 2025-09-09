// src/i18n/utils.ts
import { ui, defaultLang, routes } from './config';

/**
 * Get language from URL, falling back to default if not supported
 */
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  return lang in ui ? (lang as keyof typeof ui) : defaultLang;
}

/**
 * Return a translation function for a specific language
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Return a function to generate translated paths for a language
 */
export function useTranslatedPath(lang: keyof typeof ui) {
  return function t(path: string) {
    const basePath = path.replace(/^\/|\/$/g, ''); // remove leading/trailing slashes
    const translated = routes[lang][basePath as keyof typeof routes['en']] || basePath;
    return `/${lang}/${translated}`;
  };
}