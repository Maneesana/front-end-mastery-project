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
    <div className="mt-6 md:mt-10 flex flex-col items-center gap-3 justify-center h-full">
      <div className="w-full h-[250px] md:h-[320px] bg-gray-light p-3 rounded-md cursor-pointer">
        <Image
          src={projectImageUrl}
          alt="project-image"
          width={350}
          height={350}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-portfolio-highlight text-[16px] md:text-[18px] text-center">{projectName}</h4>

      <h3 className="text-[16px] md:text-[20px] font-bold w-full text-pretty max-h-[320px] text-center">
        {projectDescription}
      </h3>
    </div>
  );
};

export default ProjectCard;
