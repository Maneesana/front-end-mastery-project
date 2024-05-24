import React from 'react';
import PFLButton from './PFLButton';
import ProjectCard from './ProjectCard';
import portfolioData from '../../public/my-portfolio.json';
import Link from 'next/link';

const MyProjects = () => {
  const projectData = portfolioData.projects.map((project) => {
    return {
      id: crypto.randomUUID(),
      ...project,
    };
  });

  return (
    <div>
      <div className="my-6 mb-12">
        <h3 className="text-center text-[65px] font-bold mb-4">My Projects</h3>
        <p className="text-xl text-center text-balance">
          {portfolioData.projectBrief}
        </p>
      </div>

      <div className="flex items-center justify-center gap-2  mb-2">
        {portfolioData.projectsTechTags.slice(0, 10).map((tag) => {
          return (
            <PFLButton
              variant={tag === 'All' ? 'SECONDARY' : 'PRIMARY'}
              key={tag}
            >
              {tag}
            </PFLButton>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-2 mb-12">
        {portfolioData.projectsTechTags.slice(10).map((tag) => {
          return <PFLButton key={tag}>{tag}</PFLButton>;
        })}
      </div>
      <div className="flex items-center justify-center gap-4">
        {projectData.map((project) => {
          return (
            <Link href={project.projectUrl} target="_blank" key={project.id}>
              <ProjectCard
                projectDescription={project.description}
                projectImageUrl={project.projectImageUrl}
                projectName={project.title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
