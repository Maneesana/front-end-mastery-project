import React from 'react';
import Image from 'next/image';

interface IProjectCardProps {
  projectName: string;
  projectImageUrl: string;
  projectDescription: string;
}
const ProjectCard = ({
  projectDescription,
  projectName,
  projectImageUrl,
}: IProjectCardProps) => {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-[250px] md:h-[320px] bg-gray-light dark:bg-slate-700">
        <Image
          src={projectImageUrl}
          alt="project-image"
          width={350}
          height={350}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h4 className="text-portfolio-highlight text-[16px] md:text-[18px] font-semibold mb-2">{projectName}</h4>
        <p className="text-[14px] md:text-[16px] text-gray-700 dark:text-gray-300 flex-grow">
          {projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
