import PFLButton from './PFLButton';
import portfolioData from '../../public/my-portfolio.json';
import Image from 'next/image';
const Introduction = () => {
  const developerName = portfolioData.developerName;
  const developeProfileDescription = portfolioData.developerBriefDetails;
  return (
    <>
      <div className="w-full mt-[55px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
          <div className="text-center md:text-left">
            <p className="m-[0px]">
              <span className="text-[20px] md:text-[24px] p-0 m-0">Hi, I am </span>
              <span className="font-poppins text-[28px] md:text-[32px] p-0 m-0 block text-portfolio-highlight font-semibold">
                {developerName}
              </span>
            </p>
            <p className="text-[45px] md:text-[65px] lg:text-[85px] font-semibold text-gray-900 dark:text-white mt-[1px] p-0 m-0">
              {' '}
              A Full Stack{' '}
              <span className="block md:ml-[25%] m-0 p-0">Developer</span>
            </p>
            <p className="p-2 w-full md:w-[600px] text-[16px] md:text-[20px] mb-4 text-wrap leading-relaxed text-gray-800 dark:text-gray-200">
              {developeProfileDescription}
            </p>
            <PFLButton>Hire Me</PFLButton>
          </div>
          <div className="bg-slate-200 p-1 rounded-md flex flex-col items-center justify-center mt-8 md:mt-0 w-full md:w-auto">
            <Image
              alt="developer-image"
              src={portfolioData.developerProfilePictureUrl}
              className="w-full md:w-[300px] lg:w-[650px] h-auto object-cover"
              width="650"
              height="800"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
