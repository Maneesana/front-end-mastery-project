'use client';
import PFLButton from './PFLButton';
import portfolioData from '../../public/my-portfolio.json';
import Image from 'next/image';
import { useState } from 'react';
import TypingAnimation from './TypingAnimation';
import Link from 'next/link';

const Introduction = () => {
  const developerName = portfolioData.developerName;
  const developeProfileDescription = portfolioData.developerBriefDetails;
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);

  const handleGreetingComplete = () => {
    setShowName(true);
  };

  const handleNameComplete = () => {
    setShowRole(true);
  };
  const email = "maneesanamaibamsingh@gmail.com";
  const subject = "Inquiry from Website";
  const body = `
  Hi [Your Name],

  I am interested in hiring you for a project. Please let me know how we can proceed.

  Thanks!
  [Your Name]
  `;
  const hireMeMailTo =`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`

  return (
    <>
      <div id="home" className="w-full mt-[55px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
          <div className="text-center md:text-left">
            <p className="m-[0px]">
              <span className="text-[20px] md:text-[24px] p-0 m-0">
                <TypingAnimation
                  text="Hi, I am"
                  speed={30}
                  onComplete={handleGreetingComplete}
                  restartInterval={10000}
                />
              </span>
              <span className="font-mono text-[28px] md:text-[32px] p-0 m-0 block text-portfolio-highlight font-semibold">
                {showName && (
                  <TypingAnimation
                    text={developerName}
                    speed={60}
                    onComplete={handleNameComplete}
                    restartInterval={10000}
                  />
                )}
              </span>
            </p>
            <p className="text-[45px] md:text-[65px] lg:text-[85px] font-semibold text-gray-900 dark:text-white mt-[1px] p-0 m-0">
              <span className="inline-block">
                {showRole && (
                  <TypingAnimation
                    text="A Software Engineer"
                    speed={90}
                    restartInterval={10000}
                  />
                )}
              </span>
            </p>
            <p className="p-2 w-full md:w-[600px] text-[16px] md:text-[20px] mb-4 text-wrap leading-relaxed text-gray-800 dark:text-gray-200">
              {developeProfileDescription}
            </p>
            <Link href={hireMeMailTo}>
              <PFLButton>Hire Me</PFLButton>            
            </Link>
          </div>
          <div className="bg-slate-500 dark:bg-slate-200 p-1 rounded-md flex flex-col items-center justify-center mt-8 md:mt-0 w-full md:w-auto">
            <Image
              alt="developer-image"
              src={portfolioData.developerProfilePictureUrl}
              className="w-full md:w-[400px] lg:w-[800px] h-auto object-cover"
              width="800"
              height="1000"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
