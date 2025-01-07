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
  const [language, setLanguage] = useState<'en' | 'ru'>('ru');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const savedLanguage = document.cookie
      .split('; ')
      .find(row => row.startsWith('language='))
      ?.split('=')[1] as 'en' | 'ru';
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      document.cookie = `language=${language};path=/;max-age=31536000`;
      localStorage.setItem('language', language);
    }
  }, [language, isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
} 