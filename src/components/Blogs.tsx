import { AppCardTransparent } from "@/components/common";
import { transparentCardData } from "@/data";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RFC } from "./common/Types";

export const Blogs: RFC = () => {
  const blogPosts = [
    {
      date: "Feb 02",
      category: "Typescript",
      title: "Fundamentals of typescript",
      url: "fundamentals-of-typescript",
    },
    {
      date: "Mar 03",
      category: "Node.js",
      title: "What is Node.js really?",
      url: "what-is-node-js-really",
    },
    {
      date: "Apr 04",
      category: "React",
      title: "Context API in depth",
      url: "context-api-in-depth",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0">
      <div className="col-span-1">
        <div className="w-3/4">
          <AppCardTransparent {...transparentCardData.blogsSection} />
        </div>
      </div>
      <div className="col-span-1">
        {blogPosts?.map(({ date, category, title, url }, idx) => (
          <>
            <div
              className="grid grid-cols-12 py-6 gap-y-1 lg:gap-y-0"
              key={url}
            >
              <h3 className="col-span-12 lg:col-span-3 text-xs text-textLightPrimary dark:text-AshGray flex items-center">
                {date} . {category}
              </h3>

              <h4 className="col-span-11 lg:col-span-8 text-base lg:text-md xl:text-lg text-textLightPrimary dark:text-LightPastelOrange flex items-center">
                <Link href={`blog/${url}`}>{title}</Link>
              </h4>

              <Link
                className="col-span-1 lg:col-span-1 text-textLightPrimary dark:text-PastelOrange flex justify-end items-center"
                href={`blog/${url}`}
              >
                <span>
                  <FaArrowRight className="ml-auto" />
                </span>
              </Link>
            </div>
            {idx + 1 < blogPosts.length && <hr className="border-BlackTan" />}
          </>
        ))}
      </div>
    </div>
  );
};
