import pt from '@/i18n/pt';
import en from '@/i18n/en';

export type Locale = 'pt' | 'en';

const locales: Record<Locale, typeof pt> = { pt, en };

export function getLocale(lang?: string): Locale {
  if (lang === 'en') return 'en';
  return 'pt';
}

export function t(locale: Locale) {
  return locales[locale];
}

export function detectLocale(): Locale {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale');
    if (stored === 'en' || stored === 'pt') return stored;
    const browserLang = navigator.language;
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('pt')) return 'pt';
  }
  return 'pt';
}
