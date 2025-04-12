import React from 'react';

interface PFLButtonProps {
  children: string;
  variant?: 'PRIMARY' | 'SECONDARY';
  onClick?: (args?: any) => unknown;
}
const PFLButton = ({
  children,
  variant = 'PRIMARY',
  onClick,
}: PFLButtonProps) => {
  const bgColor = variant === 'PRIMARY' ? 'bg-white border-2 border-portfolio-highlight dark:bg-portfolio-highlight' : 'bg-portfolio-highlight dark:bg-white';
  const textColor = variant === 'PRIMARY' ? 'text-portfolio-highlight dark:text-[#fff]' : 'dark:text-[#000] text-[#fff]';
  const btnStyle = ` sm:px-5 sm:py-1 md:p-2 md:px-4 rounded-md ${bgColor} ${textColor}`;
  return (
    <>
      <button
        onClick={onClick}        
        className={btnStyle}
      >
        {' '}
        {children}{' '}
      </button>
    </>
  );
};

export default PFLButton;
