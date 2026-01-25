import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className="mt-8 p-3 min-h-[1200px]">
        <div className="w-auto text-xl mx-[12%]">Different Roles Resumes</div>
        <ul className="list-decimal list-inside space-y-2 mt-3 ">
          <li>
            <Link
              className="text-teal-500"
              href="/SWE_Resume_Updated.pdf"
              target="_blank"
            >
              Software Engineer
            </Link>
          </li>

          <li>
            <Link
              className="text-teal-500"
              href="/DotNet_FullStack_Resume_Updated.pdf"
              target="_blank"
            >
              .NET(C#)- Fullstack Developer
            </Link>
          </li>
          <li>
            <Link
              className="text-teal-500"
              href="/Frontend_Resume_Updated.pdf"
              target="_blank"
            >
              Frontend Developer (JS/TS)
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
