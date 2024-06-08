import React from 'react';
import { TBlog } from '../types/blog';
import Image from 'next/image';
import BlogSubContent from './BlogSubContent';

const Blog = ({
  blogBodyContent,
  blogImage,
  blogTitle,
  readingTime,
  publishAt,
}: TBlog) => {
  return (
    <>
      <div className="">
        <div className=" flex flex-col justify-center items-center gap-5">
          <h3 className="text-3xl mb-3 leading-7 tracking-wide">
            Blog title: {blogTitle}
          </h3>
          <Image src={blogImage} alt="blog-image" width="400" height="400" />
          <div className="flex  mt-6 w-[70%] p-2 justify-between gap-40 ">
            <p className="text-[18px]">
              Reading time: <span className="italic">{readingTime} </span>
            </p>
            <p className="text-[18px]">
              Published at: <span className="italic">{publishAt}</span>
            </p>
          </div>
        </div>
        <div className="mt-10  flex flex-col gap-10 items-center p-4">
          {blogBodyContent.map((content) => {
            return (
              <BlogSubContent
                key={content.id}
                subContentImage={content.subContentImage}
                subContentOrder={content.subContentOrder}
                subContentText={content.subContentText}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
