import React from 'react';
import RectangularProgress from './RectangularProgress';
import portfolioData from '../../public/my-portfolio.json';
import Image from 'next/image';
interface IAboutMe {
  skills: Array<{ id: string; name: string; level: number }>;
  aboutMe: string;
}

const AboutMe = ({ skills, aboutMe }: IAboutMe) => {
  return (
    <>
      <div id="about-me" className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 p-3 my-8 md:my-12 px-4 md:px-6 lg:px-8">
        <div className="rounded-md p-1 bg-slate-500 dark:bg-slate-200 w-full md:w-auto">
          <Image
            alt="developer-image"
            src={portfolioData.aboutMe.picture}
            width="1500"
            height="1800"
            className="w-full md:w-[600px] lg:w-[1900px] h-auto"
          />
        </div>

        <div className="w-full md:w-auto">
          <h3 className="text-[40px] md:text-[60px] text-gray-900 dark:text-white font-semibold my-3 text-center md:text-left">
            About me
          </h3>
          <p className="text-lg md:text-xl tracking-wide text-wrap leading-normal my-4 text-center md:text-left">
            {aboutMe}
          </p>
          <div className="flex flex-col">
            {skills.map((skill) => {
              return (
                <div key={skill.id} className="mb-4">
                  <p className="text-xl md:text-2xl font-semibold mt-3 text-center md:text-start">
                    {skill.name}
                  </p>
                  <RectangularProgress progress={skill.level} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
