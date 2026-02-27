export function localized(locale: string, en: string, zh: string, de: string): string {
  if (locale === 'zh') return zh;
  if (locale === 'de') return de;
  return en;
}
