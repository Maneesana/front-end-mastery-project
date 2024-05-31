import React from 'react';
import BlogSubContent from '../components/BlogSubContent';
import { BlogBodyContentDisplayOrder } from '../types/blog';

const page = () => {
  return (
    <>
      <div className="mt-3 p-3 min-h-[1200px]">
        <h3 className="text-center text-2xl mt-20">
          Currently under development.Stay tuned.
        </h3>

        {/* <BlogSubContent
          subContentImage={null}
          subContentOrder={BlogBodyContentDisplayOrder.PUT_DOWN}
          subContentText="This is sun content-1"
        /> */}
      </div>
    </>
  );
};

export default page;
