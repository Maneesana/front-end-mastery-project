import React from 'react';
import portfolioData from '../../public/my-portfolio.json';
const WorkExperience = () => {
  const workExperienceJobData = portfolioData.workExperience.jobs;
  enum FilledCircleConnectorVariants {
    PRIMARY = '#FD6F00',
    SECONDARY = '#eeeee4',
  }

  const FilledCircleConnector = ({
    variant,
  }: {
    variant: FilledCircleConnectorVariants;
  }) => {
    const circleCSS =
      ' p-3 mt-6 outline-dashed  outline-[3px] outline-offset-[7px] w-[30px] h-[30px] rounded-full';
    return (
      <div
        style={{
          backgroundColor: variant,
        }}
        className={circleCSS}
      ></div>
    );
  };
  const DashedConnectionLine = () => {
    return (
      <div className="absolute top-[65px] left-[48.825%] h-[160px] border-l-2 border-dashed border-white"></div>
    );
  };

  function WorkExperienceJobDescription({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div className="max-w-[400px]">
        <h4 className="text-[35px] font-semibold mb-1">{title}</h4>

        <p className="text-[20px] leading-relaxed text-wrap h-auto py-1">
          {description}
        </p>
      </div>
    );
  }

  const RectangularExperienceCommonWidget = ({
    showConnectionLine,
    children,
    jobDuration,
    jobTitleAndLocation,
    jobDesignation,
    jobAchievement,
  }: {
    children: React.ReactNode;
    showConnectionLine: boolean;
    jobTitleAndLocation: string;
    jobDuration: string;
    jobDesignation: string;
    jobAchievement: string;
  }) => {
    return (
      <div className="mb-[35px]">
        <div className="w-full flex items-start justify-around gap-2 p-2 my-2">
          <WorkExperienceJobDescription
            title={jobTitleAndLocation}
            description={jobDuration}
          />
          <div className="relative">
            {children}
            {showConnectionLine && <DashedConnectionLine />}
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
      <div className="">
        <h3 className="text-[65px] font-bold text-center">
          My <span className="text-portfolio-highlight">Work Experience</span>
        </h3>

        <div className="mt-20">
          {workExperienceJobData.map((exp, i) => {
            return (
              <RectangularExperienceCommonWidget
                key={exp.companyName}
                jobDuration={`${exp.startDate} - ${exp.endDate}`}
                jobAchievement={exp.achievement}
                jobTitleAndLocation={exp.companyName + ' - ' + exp.location}
                jobDesignation={exp.designation}
                showConnectionLine={i !== workExperienceJobData.length - 1}
              >
                <FilledCircleConnector
                  variant={
                    (i + 1) % 2 == 0
                      ? FilledCircleConnectorVariants.SECONDARY
                      : FilledCircleConnectorVariants.PRIMARY
                  }
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
