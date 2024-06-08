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
  const bgColor = variant === 'PRIMARY' ? 'portfolio-highlight' : 'white';
  const textColor = variant === 'PRIMARY' ? '#fff' : '#000';
  const btnStyle = ` sm:px-5 sm:py-1 md:p-2 md:px-4 rounded-md bg-${bgColor} `;
  return (
    <>
      <button
        onClick={onClick}
        style={{ color: textColor }}
        className={btnStyle}
      >
        {' '}
        {children}{' '}
      </button>
    </>
  );
};

export default PFLButton;
