import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// These styles apply to every route in the application
import './globals.css';
import PFLButton from './components/PFLButton';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white bg-portfolio-dark-background">
        <div className="w-[85%] mx-auto mt-5">
          <div className="flex flex-items w-full gap-10 items-center justify-center text-[18px]">
            <Link href="/"> Home</Link>
            <Link href="/"> About Me</Link>
            <Link href="/"> Services</Link>
            <Link href="/"> Projects</Link>
            <Link href="/"> Blogs</Link>
            <PFLButton> Download CSV</PFLButton>
          </div>
          {children}
        </div>
        <footer>
          <div className="flex items-center justify-center gap-10 my-10">
            <Link
              href="https://twitter.com/maibammaneesana"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter icon"
                width="45"
                height="45"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/maibam-maneesana-singh-a113621a7/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="Linkedin icon"
                width="45"
                height="45"
              />
            </Link>
            <Link
              href="https://github.com/Maneesana"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="/github.svg"
                alt="GitHub icon"
                width="45"
                height="45"
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
