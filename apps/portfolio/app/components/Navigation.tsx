'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import DownloadResumeButton from './DownloadResumeButton';
import { Button } from '../../../../packages/ui/src/button';

const Navigation = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBlog=()=>{
    const URL = "http://documentation.maibammaneesanasingh.studio/"
    window.open(URL,"_blank")    
  }

  return (
    <div className="w-auto mx-[5%] mt-5">
      <div className="flex flex-row w-full sm:gap-2 lg:gap-10 items-center justify-center sm:text-[12px] text-wrap md:text-[18px]">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>
          Home
        </a>
        <a href="#about-me" onClick={(e) => handleScroll(e, 'about-me')}>
          About Me
        </a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
          Projects
        </a>
        <button onClick={openBlog}>Blogs</button>
        <ThemeToggle />
        <DownloadResumeButton />
      </div>
    </div>
  );
};

export default Navigation; 