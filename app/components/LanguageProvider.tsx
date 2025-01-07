'use client';

import { useState } from "react";
import { usePathname } from 'next/navigation';
import MenuButton from "./MenuButton";

export default function LanguageProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<'en' | 'ru'>(
    pathname?.startsWith('/en') ? 'en' : 'ru'
  );

  return (
    <>
      <MenuButton setLanguage={setLanguage} />
      {children}
    </>
  );
} 