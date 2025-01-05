'use client';

export default function MenuButton() {
  return (
    <button
      className="fixed top-4 right-4 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center z-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      onClick={() => {
        // Здесь будет логика открытия меню
        console.log('Menu clicked');
      }}
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
  );
} 