interface IRectangularProgressProps {
  progress: number;
}
const RectangularProgress = ({ progress }: IRectangularProgressProps) => {
  const progressInnerStyle = `relative h-[10px] p-1.5 rounded-md bg-portfolio-highlight`;
  return (
    <div className="w-auto h-auto bg-white  p-0 rounded-md mt-3 mx-1">
      <div
        style={{
          width: `${progress > 100 ? progress % 100 : progress}%`,
        }}
        className={progressInnerStyle}
      >
        <div className="absolute right-0 bottom-[-6px] w-[20px] p-2 rounded-full bg-white h-[20px] border-4 border-portfolio-highlight"></div>
      </div>
    </div>
  );
};

export default RectangularProgress;
