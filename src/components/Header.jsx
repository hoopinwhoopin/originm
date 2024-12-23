'use client'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../assets/logo.avif';

export default function Header({ children }) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.classList.add(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 shadow-md transition duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">

          <Link to="/" className="text-2xl font-bold text-white">
          <img src={logo} alt="OMAI Logo" className="h-12 w-auto mr-4" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
      

          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-300 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 transform hover:scale-105 transition duration-300"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white rounded-full hover:bg-blue-500 dark:hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 dark:bg-blue-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
           
          
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-300 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 transform hover:scale-105 transition duration-300 inline-flex items-center"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      )}
      {children && <div className="container mx-auto px-4 py-4">{children}</div>}
    </header>
  );
}
