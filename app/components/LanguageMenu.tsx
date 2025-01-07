'use client';

import { usePathname, useRouter } from 'next/navigation';

interface LanguageMenuProps {
  setLanguage: (lang: 'en' | 'ru') => void;
  onClose?: () => void;
}

export default function LanguageMenu({ setLanguage, onClose }: LanguageMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = pathname.startsWith('/en');

  const languages = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' }
  ];

  const handleLanguageChange = (langCode: 'en' | 'ru') => {
    setLanguage(langCode);
    const basePath = isEnglish ? pathname.replace('/en', '') : pathname;
    const normalizedPath = basePath || '/';
    const newPath = langCode === 'en' ? `/en${normalizedPath}` : normalizedPath;
    router.push(newPath);
    if (onClose) onClose();
  };

  return (
    <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code as 'en' | 'ru')}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
} 