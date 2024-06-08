import Image from 'next/image';
import { BlogBodyContentDisplayOrder, IBlogBodyContent } from '../types/blog';

const BlogSubContent = ({
  subContentImage,
  subContentOrder,
  subContentText,
}: Omit<IBlogBodyContent, 'id'>) => {
  const ImageUpContent = () => {
    return (
      <>
        <Image
          src={subContentImage ?? ''}
          alt="sub-content-image"
          width="400"
          height="400"
        />
        <p className="text-wrap  tracking-wide text-xl leading-9">
          {' '}
          {subContentText}
        </p>
      </>
    );
  };
  const ImageDownContent = () => {
    return (
      <>
        <p className="text-wrap tracking-wide  text-xl leading-9">
          {' '}
          {subContentText}
        </p>
        <Image
          className="my-4"
          src={subContentImage ?? ''}
          alt="sub-content-image"
          width="400"
          height="400"
        />
      </>
    );
  };

  return (
    <>
      <div className="p-10 flex flex-col gap-3 justify-between items-center">
        {subContentOrder === BlogBodyContentDisplayOrder.PUT_DOWN && (
          <ImageDownContent />
        )}
        {subContentOrder === BlogBodyContentDisplayOrder.PUT_UP && (
          <ImageUpContent />
        )}
        {subContentOrder === BlogBodyContentDisplayOrder.PUT_NOTHING && (
          <p className="text-wrap tracking-wide text-xl leading-9">
            {subContentText}
          </p>
        )}
      </div>
    </>
  );
};

export default BlogSubContent;
