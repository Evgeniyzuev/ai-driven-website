'use client';

import { useState } from "react";
import HomePage from "./components/HomePage";
import { usePathname } from 'next/navigation';


export default function Home() {
  const pathname = usePathname();
  const [language, setLanguage] = useState<'en' | 'ru'>(
    pathname.startsWith('/en') ? 'en' : 'ru'
  );

  return <HomePage language={language} setLanguage={setLanguage} />;
}
