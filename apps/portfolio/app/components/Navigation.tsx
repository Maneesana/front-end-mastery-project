'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import DownloadResumeButton from './DownloadResumeButton';

const Navigation = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <Link href="/blogs">Blogs</Link>
        <ThemeToggle />
        <DownloadResumeButton />
      </div>
    </div>
  );
};

export default Navigation; 