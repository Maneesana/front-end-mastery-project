import React from 'react';
import Introduction from './components/Introduction';

import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import MyProjects from './components/MyProjects';
import TechStackAnimation from './components/TechStackAnimation';
import portfolioData from '../public/my-portfolio.json';

const page = () => {
  const skills = portfolioData.aboutMe.skills.map((skill) => {
    return {
      id: crypto.randomUUID(),
      name: skill.name,
      level: Number.parseInt(skill.level),
    };
  });
  const aboutMe = portfolioData.aboutMe.details;
  return (
    <>
      <Introduction />
      <AboutMe skills={skills} aboutMe={aboutMe} />

      <WorkExperience />
      <TechStackAnimation />
      <MyProjects />
      <p className="text-[20px] p-2 mt-4 text-center">
        The website is not completed yet. Still in progress...It will be
        completed soon.
      </p>
    </>
  );
};

export default page;
