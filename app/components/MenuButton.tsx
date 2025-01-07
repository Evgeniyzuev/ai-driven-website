'use client';

import { useState } from 'react';
import LanguageMenu from './LanguageMenu';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="fixed top-2 right-2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isMenuOpen && <LanguageMenu />}
    </div>
  );
} 