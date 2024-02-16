import js_logo from "@/../../public/images/js_logo.png";
import { RFC } from "@/components/common/Types";
import Image from "next/image";
import { FaDownload, FaThumbsUp } from "react-icons/fa6";
import { Social } from "../";
import { AppButton, AppButtonTextonly } from "../common";

export const HeroCTA: RFC = () => {
  return (
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

      <div className="mt-12 flex justify-center md:justify-normal gap-6 sm:gap-10">
        <AppButton>
          <div className="flex justify-center items-center gap-3">
            <span>Let&#39;s Talk!</span>
            <FaThumbsUp />
          </div>
        </AppButton>
        <AppButtonTextonly>
          <p>CV</p>
          <FaDownload />
        </AppButtonTextonly>
      </div>
      <div className="flex flex-wrap justify-center md:justify-normal items-center mt-14 gap-4 text-slate-400">
        <p>Find Me On</p>
        <hr className="w-10 border-t-[1px] border-t-textLightPrimary dark:border-t-PastelOrange" />
        <Social />
      </div>
    </div>
  );
};
