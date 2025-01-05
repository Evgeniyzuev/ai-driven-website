'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageMenu() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const languages = [
    { code: '', label: 'Русский' },
    { code: 'en', label: 'English' }
  ];

  return (
    <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={isEnglish ? 
            lang.code === 'en' ? pathname : pathname.replace('/en', '') :
            lang.code === 'en' ? '/en' + pathname : pathname
          }
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
} 