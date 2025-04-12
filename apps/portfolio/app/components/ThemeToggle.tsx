'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Image
          src="/sun.svg"
          alt="Light mode"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ) : (
        <Image
          src="/moon.svg"
          alt="Dark mode"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      )}
    </button>
  );
};

export default ThemeToggle; 