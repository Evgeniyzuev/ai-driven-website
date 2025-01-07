'use client';

import { useState, useEffect } from 'react';

interface TooltipProps {
  isVisible: boolean;
}

export default function Tooltip({ isVisible }: TooltipProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute bottom-16 left-8 z-10 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg shadow-lg animate-pulse backdrop-blur-sm">
      <div className="text-sm font-medium">
        Нажми на картинку
      </div>
      <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white/90 dark:bg-gray-800/90 rotate-45" />
    </div>
  );
} 