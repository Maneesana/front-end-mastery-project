import PFLButton from './PFLButton';
const Introduction = () => {
    return (
        <>
            <div className="w-full mt-[55px]">
                <div className="flex items-center gap-20">
                    <div>
                        <p className="m-[0px] ">
                            <span className="text-[24px] p-0 m-0">
                                Hi, I am{' '}
                            </span>
                            <span className="font-poppins text-[32px] p-0 m-0 block text-portfolio-highlight font-semibold">
                                Maibam Maneesana Singh
                            </span>
                        </p>
                        <p className="text-[85px] font-semibold text-white mt-[1px] p-0 m-0">
                            {' '}
                            A Full Stack{' '}
                            <span className="block ml-[25%] m-0 p-0">
                                Developer
                            </span>
                        </p>
                        <p className="p-2 w-[600px] text-[20px] mb-4 text-wrap leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate quidem, earum consequatur nihil nam
                            error distinctio quia, expedita ipsa eligendi,
                            molestiae deserunt excepturi nobis accusamus?
                        </p>
                        <PFLButton>Hire Me</PFLButton>
                    </div>
                    <div className=" bg-slate-200 p-3 w-[538px] h-[500px] flex flex-col items-center justify-center">
                        <h5 className="text-2xl text-fuchsia-900">
                            {' '}
                            Put profile picture here.
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Introduction;
