import React from 'react';
import Introduction from './components/Introduction';
import RectangularProgress from './components/RectangularProgress';
import AboutMe from './components/AboutMe';

const page = () => {
  const skills = [
    { id: '1', name: 'React', level: 90 },
    { id: '2', name: 'NodeJS', level: 80 },
    { id: '3', name: 'TypeScript', level: 70 },
    { id: '4', name: 'GraphQL', level: 60 },
    { id: '5', name: 'Docker', level: 50 },
  ];
  const aboutMe = `  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
    temporibus veniam doloremque minima officiis commodi sit blanditiis
    atque, incidunt consequatur explicabo assumenda unde, dolor vel
    culpa aperiam at tenetur, mollitia corrupti! Consequuntur temporibus
    accusamus quod. Minus pariatur quo saepe eius.`;
  return (
    <>
      <Introduction />
      <AboutMe skills={skills} aboutMe={aboutMe} />
      <p className="text-[30px] p-2 text-center">
        The website is not completed yet. Still in progress...It will be
        completed soon.
      </p>
    </>
  );
};

export default page;
