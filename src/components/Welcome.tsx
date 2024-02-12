import blob from "@/../../public/images/blob_bg.svg";
import js_logo from "@/../../public/images/js_logo.png";
import { AppButton } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import React from "react";
import {
  FaChevronDown,
  FaGithubAlt,
  FaLinkedin,
  FaSquareFacebook,
  FaThumbsUp,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { AppTextonlyButton } from "./common/AppTextonlyButton";

type Props = React.FC<PropsWithChildren & {}>;

export const Welcome: Props = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2">
      <div className="col-span-1 flex items-center order-2 xl:order-1">
        <div>
          <h1 className="text-5xl font-semibold text-textLightPrimary dark:text-LightPastelOrange">
            <div className="flex items-center gap-2.5">
              <div className="overflow-hidden rounded-xl shadow-md hover:scale-105">
                <Image
                  src={js_logo}
                  width={50}
                  alt="JS logo from wikimedia commons"
                  className="cursor-pointer"
                />
              </div>
              Developer
            </div>
            <div className="mt-3">At Your Service.</div>
          </h1>

          <div className="flex gap-4 mt-5">
            <hr className="w-10 ml-1 mt-8 border-t-[1px] border-t-textLightPrimary dark:border-t-PastelOrange" />
            <h4 className="text-textLightPrimary dark:text-AshGray mt-5 text-sm leading-6 pr-24">
              I love to develop web applications with the MERN stack. I build
              complex apps that are incredibly fast, resilient and secure. I am
              highly skilled in React, NextJS and ExpressJS.
            </h4>
          </div>

          <div className="mt-12 flex gap-10">
            <AppButton>
              <div className="flex justify-center items-center gap-3">
                <span>Let&#39;s Talk!</span>
                <FaThumbsUp />
              </div>
            </AppButton>
            <AppTextonlyButton>
              <p>CV</p>
              <FaChevronDown />
            </AppTextonlyButton>
          </div>

          <ul className="social-navbar ml-1 mt-10 text-2xl flex items-center gap-7">
            <li>
              <Link
                target="_blank"
                href={`https://www.facebook.com/shourovfoisal123/`}
              >
                <FaSquareFacebook className="text-[#1877f2]" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href={`https://github.com/shourovfoisal`}>
                <FaGithubAlt className="text-[#6e5494] text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={`https://www.linkedin.com/in/shourovfoisal/`}
              >
                <FaLinkedin className="text-[#0a66c2]" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href={`mailto:shourovcseruet@gmail.com`}>
                <HiMail className="text-[#ea4335] text-3xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative col-span-1 flex justify-end order-1 xl:order-2">
        {/* <TransparentCard {...transparentCardData.welcomeSection} /> */}
        <Image
          src={blob}
          width={450}
          alt="Photo Background"
          className="rotate-180"
        />
        <div className="absolute -top-10 -right-10 flex gap-3">
          <hr className="w-5 mt-4 border-t-[1px] border-t-textLightPrimary dark:border-t-PastelOrange" />
          <p className="font-medium text-lg">
            &quot; Your Dream Web App,{" "}
            <p className="block text-right">Just a Click Away! &quot;</p>
          </p>
        </div>
      </div>
    </div>
  );
};
