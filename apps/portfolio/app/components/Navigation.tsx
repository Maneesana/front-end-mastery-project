'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import DownloadResumeButton from './DownloadResumeButton';
import { Button } from '../../../../packages/ui/src/button';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking a link
    }
  };

  const openBlog = () => {
    const URL = "http://documentation.maibammaneesanasingh.studio/"
    window.open(URL, "_blank");
    setIsMenuOpen(false); // Close menu after clicking a link
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-auto mx-[5%] mt-5">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-end mb-4">
        <button 
          onClick={toggleMenu}
          className="text-gray-900 dark:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mb-4 transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col space-y-4 items-center">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="font-medium text-[18px]">
            Home
          </a>
          <a href="#about-me" onClick={(e) => handleScroll(e, 'about-me')} className="font-medium text-[18px]">
            About Me
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="font-medium text-[18px]">
            Projects
          </a>
          <button onClick={openBlog} className="font-medium text-[18px]">Blogs</button>
          <div className="flex flex-col space-y-4 items-center w-full">
            <div className="w-full flex justify-center">
              <ThemeToggle />
            </div>
            <div className="w-full flex justify-center">
              <DownloadResumeButton />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex flex-row w-full items-center justify-center text-[18px] lg:text-[20px]">
        <div className="flex flex-row gap-6 md:gap-8 lg:gap-10 items-center">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="font-medium">
            Home
          </a>
          <a href="#about-me" onClick={(e) => handleScroll(e, 'about-me')} className="font-medium">
            About Me
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="font-medium">
            Projects
          </a>
          <button onClick={openBlog} className="font-medium">Blogs</button>
        </div>
        <div className="flex items-center ml-4 md:ml-6 lg:ml-8">
          <ThemeToggle />
          <DownloadResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Navigation; 