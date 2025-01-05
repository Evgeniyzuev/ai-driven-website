'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.includes('/en');

  return (
    <div className="fixed top-4 right-4 z-50">
      <Link 
        href={isEnglish ? pathname.replace('/en', '') : '/en' + pathname}
        className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      >
        {isEnglish ? 'РУС' : 'ENG'}
      </Link>
    </div>
  );
}
