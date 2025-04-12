import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import portfolioData from '../public/my-portfolio.json';
import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <body className="text-gray-900 dark:text-white bg-white dark:bg-portfolio-dark-background transition-colors">
        <ThemeProvider>
          <Navigation />
          <div className="w-auto mx-[5%] mt-5">{children}</div>
          <footer>
            <div className="flex items-center justify-center gap-10 mb-3 mt-32">
              <Link
                href={portfolioData.socialLinks.twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/twitter-light.svg"
                  alt="Twitter icon"
                  width="35"
                  height="35"
                  className="block dark:hidden"
                />
                <Image
                  src="/twitter-dark.svg"
                  alt="Twitter icon"
                  width="35"
                  height="35"
                  className="hidden dark:block"
                />
              </Link>
              <Link
                href={portfolioData.socialLinks.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/linkedin-light.svg"
                  alt="Linkedin icon"
                  width="35"
                  height="35"
                  className="block dark:hidden"
                />
                <Image
                  src="/linkedin-dark.svg"
                  alt="Linkedin icon"
                  width="35"
                  height="35"
                  className="hidden dark:block"
                />
              </Link>
              <Link
                href={portfolioData.socialLinks.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/github-light.svg"
                  alt="GitHub icon"
                  width="35"
                  height="35"
                  className="block dark:hidden"
                />
                <Image
                  src="/github-dark.svg"
                  alt="GitHub icon"
                  width="35"
                  height="35"
                  className="hidden dark:block"
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
