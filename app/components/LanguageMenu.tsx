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
    // Сначала убираем префикс /en, если он есть
    const basePath = isEnglish ? pathname.replace('/en', '') : pathname;
    
    // Если путь пустой после удаления /en, возвращаем "/"
    const normalizedPath = basePath || '/';
    
    // Затем добавляем нужный префикс для английского языка
    return langCode === 'en' ? `/en${normalizedPath}` : normalizedPath;
  };

  return (
    <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getLanguageUrl(lang.code)}
          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
} 