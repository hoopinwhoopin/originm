// Updated Layout.jsx with Black and White Theme Toggle
'use client';

import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from 'next-themes';
import './index.css';

const inter = Inter({ subsets: ['latin'] });

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn px-4 py-2 rounded-md shadow-md focus:outline-none transition"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black dark:bg-white text-white dark:text-black`}>
        <ThemeProvider attribute="class" enableSystem>
          <header className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">My Application</h1>
            <ThemeToggle />
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
