import React from 'react';

interface PFLButtonProps {
  children: string;
  variant?: 'PRIMARY' | 'SECONDARY';
}
const PFLButton = ({ children, variant = 'PRIMARY' }: PFLButtonProps) => {
  const bgColor = variant === 'PRIMARY' ? 'portfolio-highlight' : 'white';
  const textColor = variant === 'PRIMARY' ? 'white' : 'black';
  const btnStyle = `p-2 px-4 rounded-md bg-${bgColor} text-${textColor} text-[18px]`;
  return (
    <>
      <button className={btnStyle}> {children} </button>
    </>
  );
};

export default PFLButton;
