'use client';

import React from 'react';
import RightToLeftAnimation from './RightToLeftAnimation';
import Image from 'next/image';

const TechStackAnimation = () => {
  const data = [
    {
      src: '/postgres.svg',
      alt: 'postgres-icon',
    },
    {
      src: '/sqlServer.svg',
      alt: 'sqlServer-icon',
    },
    {
      src: '/c_sharp.svg',
      alt: 'c-sharp-icon',
    },
    {
      src: '/c_plus_plus.svg',
      alt: 'c_plus_plus-icon',
    },
    {
      src: '/dotNet.svg',
      alt: 'dot-net-icon',
    },
    {
      src: '/tailwind.svg',
      alt: 'tailwind-css-icon',
    },
    {
      src: '/typescript.svg',
      alt: 'typescript-icon',
    },
    {
      src: '/react.svg',
      alt: 'react-icon',
    },
    {
      src: '/nuxt.svg',
      alt: 'nuxt-js-icon',
    },
    {
      src: '/docker.svg',
      alt: 'docker-icon',
    },
    {
      src: '/node.svg',
      alt: 'node-js-icon',
    },
    {
      src: '/vue.svg',
      alt: 'vue-js-icon',
    },
    {
      src: '/graphql.svg',
      alt: 'graphql-icon',
    },
    {
      src: '/javascript.svg',
      alt: 'javascript-icon',
    },
    {
      src: '/sass.svg',
      alt: 'sass-icon',
    },
  ];
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <h3 className="text-[40px] md:text-[65px] font-bold text-center my-8 md:my-12">
        My <span className="text-portfolio-highlight">Tech Stack</span>
      </h3>
      <div className="bg-[#F2F4F7] p-4 md:p-6 rounded-md">
        <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
          <RightToLeftAnimation>
            {data.slice(0, 8).map((item) => {
              return (
                <Image
                  key={item.src}
                  src={item.src}
                  className="p-2 md:p-3 hover:animate-bouncy-shaky cursor-pointer w-[100px] h-[100px] md:w-[150px] md:h-[145px]"
                  alt={item.alt}
                  width="150"
                  height="145"
                />
              );
            })}
          </RightToLeftAnimation>
          <RightToLeftAnimation>
            {data.slice(6).map((item) => {
              return (
                <Image
                  key={item.src}
                  src={item.src}
                  className="p-2 md:p-3 hover:animate-bouncy-shaky cursor-pointer w-[100px] h-[100px] md:w-[150px] md:h-[145px]"
                  alt={item.alt}
                  width="150"
                  height="145"
                />
              );
            })}
          </RightToLeftAnimation>
        </div>
      </div>
    </div>
  );
};

export default TechStackAnimation;
