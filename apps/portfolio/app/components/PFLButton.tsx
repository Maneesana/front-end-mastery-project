import React from 'react';

interface PFLButtonProps {
  children: string;
  variant?: 'PRIMARY' | 'SECONDARY';
}
const PFLButton = ({ children, variant = 'PRIMARY' }: PFLButtonProps) => {
  const bgColor = variant === 'PRIMARY' ? 'portfolio-highlight' : 'white';
  const textColor = variant === 'PRIMARY' ? '#fff' : '#000';
  const btnStyle = `p-2 px-4 rounded-md bg-${bgColor} text-[18px]`;
  return (
    <>
      <button style={{ color: textColor }} className={btnStyle}>
        {' '}
        {children}{' '}
      </button>
    </>
  );
};

export default PFLButton;
