import myPic from "@/../../public/images/myPic.png";
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
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-20 md:gap-y-10 xl:gap-y-16 pb-20 xl:pb-0">
      <div className="col-span-1 flex items-center order-2 xl:order-1">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold text-textLightPrimary dark:text-LightPastelOrange">
            <div className="flex items-center gap-2.5">
              <div className="overflow-hidden rounded-xl shadow-md hover:scale-105">
                <Image
                  src={js_logo}
                  width={50}
                  alt="JS logo from wikimedia commons"
                  className="cursor-pointer w-9 md:w-12"
                />
              </div>
              Developer
            </div>
            <div className="mt-3">At Your Service.</div>
          </h1>

          <div className="flex gap-4 mt-5">
            <hr className="w-10 ml-1 mt-8 border-t-[1px] border-t-textLightPrimary dark:border-t-PastelOrange" />
            <h4 className="text-textLightPrimary dark:text-AshGray mt-5 text-sm leading-6 xl:pr-24">
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
      <div className="col-span-1 flex order-1 xl:order-2">
        <div className="relative w-fit mx-auto xl:mx-0 pt-8 md:pt-16 pb-8 xl:pb-0">
          <div
            style={{
              maskImage: "url(/images/blob_bg.svg)",
              maskRepeat: "no-repeat",
              maskSize: "95%",
            }}
            className="h-[13rem] xs:h-[17rem] sm:h-[20rem] md:h-[25rem] lg:h-[27rem] 2xl:h-[34rem]"
          >
            <Image
              src={myPic}
              width={600}
              className="w-[28rem] lg:w-[30rem]"
              alt="Shourov Foisal"
            />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:-translate-x-0 md:top-0 xl:-top-12 2xl:-top-10 md:-right-6 xl:-right-8 2xl:-right-10 flex gap-3">
            <hr className="w-5 mt-4 border-t-[1px] border-t-textLightPrimary dark:border-t-PastelOrange" />
            <p className="font-medium text-lg whitespace-nowrap">
              &quot; Your Dream Web App,{" "}
              <span className="block text-right">
                Just a Click Away! &quot;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
