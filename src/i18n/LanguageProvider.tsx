import { useEffect, useState, type ReactNode } from 'react';
import { ui, type Lang } from '../content';
import { LanguageContext } from './context';

const STORAGE_KEY = 'lang';

const initialLang = (): Lang => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'es') return saved;
  return navigator.language.startsWith('es') ? 'es' : 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: ui[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
