import Image from 'next/image';
import { BlogBodyContentDisplayOrder, IBlogBodyContent } from '../types/blog';

const BlogSubContent = ({
  subContentImage,
  subContentOrder,
  subContentText,
}: IBlogBodyContent) => {
  const ImageUpContent = () => {
    return (
      <>
        <Image src={subContentImage ?? ''} alt="sub-content-image" />
        <div> {subContentText}</div>
      </>
    );
  };
  const ImageDownContent = () => {
    return (
      <>
        <div> {subContentText}</div>
        <Image src={subContentImage ?? ''} alt="sub-content-image" />
      </>
    );
  };

  return (
    <>
      {subContentOrder === BlogBodyContentDisplayOrder.PUT_DOWN && (
        <ImageDownContent />
      )}
      {subContentOrder === BlogBodyContentDisplayOrder.PUT_UP && (
        <ImageUpContent />
      )}
      {subContentOrder === BlogBodyContentDisplayOrder.PUT_NOTHING && (
        <div>{subContentText}</div>
      )}
    </>
  );
};

export default BlogSubContent;
