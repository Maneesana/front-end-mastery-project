import React from 'react';

interface PFLButtonProps {
    children: string;
}
const PFLButton = ({ children }: PFLButtonProps) => {
    return (
        <>
            <button> {children} </button>
        </>
    );
};

export default PFLButton;
