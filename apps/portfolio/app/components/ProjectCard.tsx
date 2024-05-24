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
    <div className="mt-10 flex flex-col items-start gap-3 justify-center">
      <div className="w-[300px] h-[320px] bg-gray-light p-3 rounded-md cursor-pointer">
        <Image
          src={projectImageUrl}
          alt="project-image"
          width={400}
          height={350}
        />
      </div>
      <h4 className="text-portfolio-highlight text-[18px]">{projectName} </h4>

      <h3 className="text-[20px] font-bold max-w-[300px] text-pretty max-h-[320px]">
        {projectDescription}
      </h3>
    </div>
  );
};

export default ProjectCard;
