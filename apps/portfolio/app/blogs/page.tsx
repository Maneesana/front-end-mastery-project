import React from 'react';
import BlogSubContent from '../components/BlogSubContent';
import { TBlog } from '../types/blog';
import Blog from '../components/Blog';
import blogSample from '../../assets/blogs/31-June-2024-SampleBlog.json';

const page = () => {
  let copyBlog = structuredClone(blogSample) as TBlog;

  return (
    <>
      <div className="mt-8 p-3 min-h-[1200px]">
        <div className="w-auto mx-[12%]">
          <Blog {...copyBlog} />
        </div>
      </div>
    </>
  );
};

export default page;
