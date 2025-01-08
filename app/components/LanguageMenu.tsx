'use client';

interface LanguageMenuProps {
  setLanguage: (lang: 'en' | 'ru') => void;
  onClose?: () => void;
}

export default function LanguageMenu({ setLanguage, onClose }: LanguageMenuProps) {
  const languages = [
    { code: 'ru', label: 'Русский' },
    { code: 'en', label: 'English' }
  ];

  const handleLanguageChange = (langCode: 'en' | 'ru') => {
    setLanguage(langCode);
    if (onClose) onClose();
  };

  return (
    <div className="fixed top-14 right-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-50">
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