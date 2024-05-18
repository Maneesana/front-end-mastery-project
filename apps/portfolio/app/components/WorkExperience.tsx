import React from 'react';

const WorkExperience = () => {
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
      'p-3 mt-6 outline-dashed  outline-[3px] outline-offset-[7px] w-[30px] h-[30px] rounded-full';
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
      <div className="absolute top-[72px] left-[48.825%] h-[96px] border-l-2 border-dashed border-white"></div>
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
  }: {
    children: React.ReactNode;
    showConnectionLine: boolean;
  }) => {
    return (
      <div className="relative mb-[35px]">
        <div className="w-full flex items-start justify-around gap-2 p-2 my-2">
          <WorkExperienceJobDescription
            title="Google Bangalore"
            description="July, 2024 - Present"
          />
          {children}
          <WorkExperienceJobDescription
            title="Software Engineer I"
            description="Lorem ipsum "
          />
        </div>

        {showConnectionLine && <DashedConnectionLine />}
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
          <RectangularExperienceCommonWidget showConnectionLine={true}>
            <FilledCircleConnector
              variant={FilledCircleConnectorVariants.PRIMARY}
            />
          </RectangularExperienceCommonWidget>

          <RectangularExperienceCommonWidget showConnectionLine={true}>
            <FilledCircleConnector
              variant={FilledCircleConnectorVariants.PRIMARY}
            />
          </RectangularExperienceCommonWidget>

          <RectangularExperienceCommonWidget showConnectionLine={true}>
            <FilledCircleConnector
              variant={FilledCircleConnectorVariants.PRIMARY}
            />
          </RectangularExperienceCommonWidget>

          <RectangularExperienceCommonWidget showConnectionLine={false}>
            <FilledCircleConnector
              variant={FilledCircleConnectorVariants.SECONDARY}
            />
          </RectangularExperienceCommonWidget>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
