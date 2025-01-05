'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageMenu() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const languages = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' }
  ];

  const getLanguageUrl = (langCode: string) => {
    if (langCode === 'en') {
      return isEnglish ? pathname : '/en' + pathname;
    } else {
      return isEnglish ? pathname.replace('/en', '') : pathname;
    }
  };

  return (
    <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getLanguageUrl(lang.code)}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          onClick={() => {
            // Добавляем небольшую задержку для анимации закрытия меню
            setTimeout(() => {
              window.location.href = getLanguageUrl(lang.code);
            }, 150);
          }}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
} 