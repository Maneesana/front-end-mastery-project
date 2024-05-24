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
      <div className="flex  justify-center items-center gap-16 p-3 my-12">
        <div className="rounded-md p-1 bg-slate-100 ">
          <Image
            alt="developer-image"
            src={portfolioData.aboutMe.picture}
            width="1000"
            height="1200"
          />
        </div>

        <div className="">
          <h3 className="text-[60px] text-white font-semibold my-3">
            About me
          </h3>
          <p className="text-xl tracking-wide text-wrap leading-normal my-4">
            {aboutMe}
          </p>
          <div className="flex flex-col">
            {skills.map((skill) => {
              return (
                <div className="">
                  <p className="text-2xl font-semibold mt-3 text-start ml-1">
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
