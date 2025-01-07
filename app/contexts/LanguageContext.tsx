'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ru';
  setLanguage: (lang: 'en' | 'ru') => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ru',
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'ru'>(() => {
    if (typeof document !== 'undefined') {
      return document.cookie.split('; ').find(row => row.startsWith('language='))?.split('=')[1] as 'en' | 'ru' || 'ru';
    }
    return 'ru';
  });

  useEffect(() => {
    document.cookie = `language=${language};path=/;max-age=31536000`;
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
} 