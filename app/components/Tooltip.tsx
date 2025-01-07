'use client';

import { useState, useEffect } from 'react';

interface TooltipProps {
  isVisible: boolean;
}

export default function Tooltip({ isVisible }: TooltipProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg animate-bounce">
      <div className="text-sm font-medium">
        Нажми на картинку
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white dark:bg-gray-800" />
    </div>
  );
} 