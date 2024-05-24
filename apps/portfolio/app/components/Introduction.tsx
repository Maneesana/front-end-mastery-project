import PFLButton from './PFLButton';
import portfolioData from '../../public/my-portfolio.json';
import Image from 'next/image';
const Introduction = () => {
  const developerName = portfolioData.developerName;
  const developeProfileDescription = portfolioData.developerBriefDetails;
  return (
    <>
      <div className="w-full mt-[55px]">
        <div className="flex items-center gap-20">
          <div>
            <p className="m-[0px] ">
              <span className="text-[24px] p-0 m-0">Hi, I am </span>
              <span className="font-poppins text-[32px] p-0 m-0 block text-portfolio-highlight font-semibold">
                {developerName}
              </span>
            </p>
            <p className="text-[85px] font-semibold text-white mt-[1px] p-0 m-0">
              {' '}
              A Full Stack{' '}
              <span className="block ml-[25%] m-0 p-0">Developer</span>
            </p>
            <p className="p-2 w-[600px] text-[20px] mb-4 text-wrap leading-relaxed">
              {developeProfileDescription}
            </p>
            <PFLButton>Hire Me</PFLButton>
          </div>
          <div className=" bg-slate-200 p-1 rounded-md flex flex-col items-center justify-center">
            <h5 className="text-2xl text-fuchsia-900">
              {' '}
              <Image
                alt="developer-image"
                src={portfolioData.developerProfilePictureUrl}
                className="w-auto h-auto"
                width="1000"
                height="850"
              />
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
