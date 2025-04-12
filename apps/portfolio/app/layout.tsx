import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// These styles apply to every route in the application
import './globals.css';
import PFLButton from './components/PFLButton';
import portfolioData from '../public/my-portfolio.json';
import DownloadResumeButton from './components/DownloadResumeButton';

export const metadata: Metadata = {
  title: 'Maibam Maneesana Singh',
  description: 'Protfolio of Maibam Maneesana Singh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="text-gray-900 dark:text-white bg-white dark:bg-portfolio-dark-background transition-colors">
        <ThemeProvider>
          <div className="w-auto mx-[5%] mt-5">
            <div className="flex flex-row w-full sm:gap-2 lg:gap-10 items-center justify-center sm:text-[12px] text-wrap md:text-[18px]">
              <Link href="/"> Home</Link>
              <Link href="#about-me"> About Me</Link>
              {/* <Link href="/"> Services</Link> */}
              <Link href="#projects"> Projects</Link>
              <Link href="/blogs"> Blogs</Link>
              <ThemeToggle />
              <DownloadResumeButton/>     
            </div>
          </div>
          <div className="w-auto mx-[5%] mt-5">{children}</div>
          <footer>
            <div className="flex items-center justify-center gap-10 mb-3 mt-32">
              <Link
                href={portfolioData.socialLinks.twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/twitter.svg"
                  alt="Twitter icon"
                  width="35"
                  height="35"
                />
              </Link>
              <Link
                href={portfolioData.socialLinks.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin icon"
                  width="35"
                  height="35"
                />
              </Link>
              <Link
                href={portfolioData.socialLinks.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub icon"
                  width="35"
                  height="35"
                />
              </Link>
            </div>

            <p className="text-center p-3 mb-3 text-2sm text-balance leading-relaxed">
              &copy;{' '}
              <span className="text-portfolio-highlight">
                Maibam Maneesana Singh
              </span>{' '}
              All Rights Reserved Inc.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
