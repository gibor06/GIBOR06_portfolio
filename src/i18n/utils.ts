import { ui, defaultLang, type Locale } from './ui';

export function getBasePath(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '');
}

export function withBase(path: string = ''): string {
  if (!path) return `${getBasePath()}/`;
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const base = getBasePath();
  // Avoid double-prefixing if path already starts with base
  if (base && (path === base || path.startsWith(`${base}/`))) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function stripBase(pathname: string): string {
  const base = getBasePath();
  let stripped = pathname;
  if (base && stripped.startsWith(base)) {
    stripped = stripped.slice(base.length);
  }
  if (!stripped.startsWith('/')) {
    stripped = `/${stripped}`;
  }
  return stripped;
}

export function getLangFromUrl(url: URL): Locale {
  const stripped = stripBase(url.pathname);
  const [, firstSeg] = stripped.split('/');
  if (firstSeg && firstSeg in ui) return firstSeg as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRelativeLocaleUrl(lang: string, path: string = ''): string {
  const base = getBasePath();
  let cleanPath = stripBase(path);
  // Strip any leading /vi or /en from cleanPath so we don't duplicate locale prefix
  cleanPath = cleanPath.replace(/^\/(vi|en)(?=\/|$)/, '');
  if (!cleanPath || cleanPath === '/') {
    return lang === defaultLang ? `${base}/` : `${base}/${lang}`;
  }
  const normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  if (lang === defaultLang) {
    return `${base}${normalized}`;
  }
  return `${base}/${lang}${normalized}`;
}

export function getCanonicalRouteKey(pathname: string): string {
  let clean = stripBase(pathname).replace(/\/$/, '');
  clean = clean.replace(/^\/(vi|en)(?=\/|$)/, '');
  return clean || '/';
}

export function getAlternateLocaleUrl(currentLang: "en" | "vi", pathname: string = '/'): string {
  const targetLang = currentLang === "en" ? "vi" : "en";
  return getRelativeLocaleUrl(targetLang, pathname);
}
