import React from 'react';

interface IRightToLeftAnimation {
  children: React.ReactNode[];
}
const RightToLeftAnimation = ({ children }: IRightToLeftAnimation) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-marquee space-x-10">
        {children.map((child) => child)}
      </div>
    </div>
  );
};

export default RightToLeftAnimation;
