'use client';
import React, { useMemo, useState } from 'react';
import PFLButton from './PFLButton';
import ProjectCard from './ProjectCard';
import portfolioData from '../../public/my-portfolio.json';
import Link from 'next/link';

const MyProjects = () => {
  const _projectDataSource = useMemo(() => {
    return portfolioData.projects.map((project) => {
      return {
        id: crypto.randomUUID(),
        ...project,
      };
    });
  }, []);
  const [projectData, setProjectData] = useState(_projectDataSource);
  const [currentSelectedButtonRow1, setCurrentSelectedButtonRow1] = useState<
    number | null
  >(0);
  const [currentSelectedButtonRow2, setCurrentSelectedButtonRow2] = useState<
    number | null
  >(null);
  const filterProjects = (tag: string) => {
    return tag == 'All'
      ? _projectDataSource
      : _projectDataSource.filter((project) => {
          return project.tags.includes(tag);
        });
  };
  const filterAndUpdateProjectsByTagRow1 = (
    tag: string,
    buttonIndex: number
  ) => {
    setProjectData(filterProjects(tag));
    setCurrentSelectedButtonRow1(buttonIndex);
    setCurrentSelectedButtonRow2(null);
  };
  const filterAndUpdateProjectsByTagRow2 = (
    tag: string,
    buttonIndex: number
  ) => {
    setProjectData(filterProjects(tag));
    setCurrentSelectedButtonRow2(buttonIndex);
    setCurrentSelectedButtonRow1(null);
  };

  return (
    <div id="projects" className="px-4 md:px-6 lg:px-8">
      <div className="my-6 mb-12">
        <h3 className="text-center text-[40px] md:text-[65px] font-bold mb-4">My Projects</h3>
        <p className="text-lg md:text-xl text-center text-balance px-4 md:px-0">
          {portfolioData.projectBrief}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        {portfolioData.projectsTechTags.slice(0, 10).map((tag, buttonIndex) => {
          return (
            <PFLButton
              variant={
                currentSelectedButtonRow1 === buttonIndex
                  ? 'SECONDARY'
                  : 'PRIMARY'
              }
              key={tag}
              onClick={() => filterAndUpdateProjectsByTagRow1(tag, buttonIndex)}
            >
              {tag}
            </PFLButton>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {portfolioData.projectsTechTags.slice(10).map((tag, buttonIndex) => {
          return (
            <PFLButton
              variant={
                currentSelectedButtonRow2 === buttonIndex
                  ? 'SECONDARY'
                  : 'PRIMARY'
              }
              key={tag}
              onClick={() => filterAndUpdateProjectsByTagRow2(tag, buttonIndex)}
            >
              {tag}
            </PFLButton>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => {
          return (
            <Link href={project.projectUrl} target="_blank" key={project.id} className="block h-full">
              <div className="h-full">
                <ProjectCard
                  projectDescription={project.description}
                  projectImageUrl={project.projectImageUrl}
                  projectName={project.title}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {projectData.length === 0 && (
        <p className="text-center text-xl md:text-2xl mt-10">
          No projects are currently available for the selected technology.
        </p>
      )}
    </div>
  );
};

export default MyProjects;
