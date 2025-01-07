'use client';

import { useState, useEffect } from "react";

export default function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<'en' | 'ru'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') as 'en' | 'ru' || 'ru';
    }
    return 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <>
      {children}
    </>
  );
} 