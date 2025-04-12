'use client';
import React, { useRef, useEffect, useState } from 'react';
import portfolioData from '../../public/my-portfolio.json';

const WorkExperience = () => {
  const workExperienceJobData = portfolioData.workExperience.jobs;
  const [lineHeights, setLineHeights] = useState<number[]>([]);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Calculate heights between circles
    const heights = circleRefs.current.map((circle, index) => {
      if (index === circleRefs.current.length - 1) return 0;
      const currentCircle = circle;
      const nextCircle = circleRefs.current[index + 1];
      
      if (currentCircle && nextCircle) {
        const currentRect = currentCircle.getBoundingClientRect();
        const nextRect = nextCircle.getBoundingClientRect();
        // Calculate distance from bottom of current circle to top of next circle
        return nextRect.top - (currentRect.top + currentRect.height);
      }
      return 0;
    });

    setLineHeights(heights);
  }, []);

  enum FilledCircleConnectorVariants {
    PRIMARY = '#FD6F00',
    SECONDARY = '#eeeee4',
  }

  const FilledCircleConnector = ({
    variant,
    index,
  }: {
    variant: FilledCircleConnectorVariants;
    index: number;
  }) => {
    const circleCSS =
      'p-3 mt-6 outline-dashed outline-[3px] outline-offset-[7px] w-[30px] h-[30px] rounded-full';
    return (
      <div
        ref={(el) => {
          circleRefs.current[index] = el;
        }}
        style={{
          backgroundColor: variant,
        }}
        className={circleCSS}
      ></div>
    );
  };

  const DashedConnectionLine = ({ height }: { height: number }) => {
    return (
      <div 
        className="absolute left-[48.825%] border-l-2 border-dashed font-bold border-black dark:border-white hidden md:block"
        style={{ 
          top: '100%', // Start from the bottom of the circle
          height: `${height}px`
        }}
      ></div>
    );
  };

  function WorkExperienceJobDescription({
    title,
    subTitle,
    description,
  }: {
    title: string;
    subTitle?:string;  
    description: string;
  }) {
    return (
      <div className="max-w-full md:max-w-[400px]">
        <h4 className="text-[25px] md:text-[35px] font-semibold mb-1 text-center md:text-left">{title}</h4>
        {subTitle && <p className="text-[16px] italic md:text-[20px] leading-relaxed text-wrap h-auto py-1 text-center md:text-left">
          {subTitle}
        </p>}
        <p className="text-[16px] md:text-[20px] leading-relaxed text-wrap h-auto py-1 text-center md:text-left">
          {description}
        </p>
      </div>
    );
  }

  const RectangularExperienceCommonWidget = ({
    showConnectionLine,
    children,
    jobDuration,
    jobTitle,
    location,
    jobDesignation,
    jobAchievement,
    index,
  }: {
    children: React.ReactNode;
    showConnectionLine: boolean;
    jobTitle: string;
    location: string,
    jobDuration: string;
    jobDesignation: string;
    jobAchievement: string;
    index: number;
  }) => {
    return (
      <div className="mb-[35px]">
        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-8 md:gap-2 p-2 my-2">
          <WorkExperienceJobDescription
            title={jobTitle}
            subTitle={location}
            description={jobDuration}
          />
          <div className="relative">
            {children}
            {showConnectionLine && <DashedConnectionLine height={lineHeights[index] || 0} />}
          </div>
          <WorkExperienceJobDescription
            title={jobDesignation}
            description={jobAchievement}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="px-4 md:px-6 lg:px-8">
        <h3 className="text-[40px] md:text-[65px] font-bold text-center">
          My <span className="text-portfolio-highlight">Work Experience</span>
        </h3>

        <div className="mt-10 md:mt-20">
          {workExperienceJobData.map((exp, i) => {
            return (
              <RectangularExperienceCommonWidget
                key={exp.companyName}
                jobDuration={`${exp.startDate} - ${exp.endDate}`}
                jobAchievement={exp.achievement}                
                jobTitle={exp.companyName}
                location={exp.location}
                jobDesignation={exp.designation}
                showConnectionLine={i !== workExperienceJobData.length - 1}
                index={i}
              >
                <FilledCircleConnector
                  variant={
                    (i + 1) % 2 == 0
                      ? FilledCircleConnectorVariants.SECONDARY
                      : FilledCircleConnectorVariants.PRIMARY
                  }
                  index={i}
                />
              </RectangularExperienceCommonWidget>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
