import React from 'react';
const ProjectCard = () => {
  return (
    <div className="mt-10 flex flex-col items-start gap-3 justify-center">
      <div className="w-[300px] h-[320px] bg-gray-light p-3 rounded-md cursor-pointer">
        {/* <Image src="/github.svg" alt="project-image" width={40} height={35} /> */}
      </div>
      <h4 className="text-portfolio-highlight text-[18px]">Category </h4>
      <h3 className="text-[20px] font-bold max-w-[300px] text-pretty max-h-[320px]">
        Lorem ipsum dolor sit amet
      </h3>
    </div>
  );
};

export default ProjectCard;
