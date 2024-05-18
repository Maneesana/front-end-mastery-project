import React from 'react';
import RectangularProgress from './RectangularProgress';

interface IAboutMe {
  skills: Array<{ id: string; name: string; level: number }>;
  aboutMe: string;
}

const AboutMe = ({ skills, aboutMe }: IAboutMe) => {
  return (
    <>
      <div className="flex items-start justify-center items-center gap-16 p-3 my-12">
        <div className="w-[1200px] h-[400px] bg-teal-300 p-2"></div>

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
