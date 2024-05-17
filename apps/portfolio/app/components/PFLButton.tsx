import React from 'react';

interface PFLButtonProps {
    children: string;
}
const PFLButton = ({ children }: PFLButtonProps) => {
    return (
        <>
            <button className="p-2 px-4 rounded-md bg-portfolio-highlight text-white text-[18px]">
                {' '}
                {children}{' '}
            </button>
        </>
    );
};

export default PFLButton;
