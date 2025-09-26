// src/i18n/utils.ts
import { ui, defaultLang, routes } from './ui';  // Changed from './config'

// Rest of your code remains the same
export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  return lang in ui ? (lang as keyof typeof ui) : defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

function resolveTranslatedPath(lang: keyof typeof ui, path: string) {
  const basePath = path.replace(/^\/|\/$/g, '');
  const translated = routes[lang][basePath as keyof typeof routes['en']] || basePath;
  return `/${lang}/${translated}`;
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function t(path: string) {
    return resolveTranslatedPath(lang, path);
  };
}

export function getTranslatedPath(lang: keyof typeof ui, path: string) {
  return resolveTranslatedPath(lang, path);
}
