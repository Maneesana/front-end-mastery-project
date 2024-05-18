import React from 'react';
import PFLButton from './PFLButton';
import ProjectCard from './ProjectCard';

const MyProjects = () => {
  return (
    <div>
      <div className="my-6 mb-12">
        <h3 className="text-center text-[65px] font-bold mb-4">My Projects</h3>
        <p className="text-xl text-center text-balance">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          obcaecati qui omnis at tempore sint odit, dicta laudantium.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-12">
        <PFLButton variant="SECONDARY">Front-end</PFLButton>
        <PFLButton>Back-end</PFLButton>
        <PFLButton>All</PFLButton>
      </div>
      <div className="flex items-center justify-center gap-4">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
};

export default MyProjects;
