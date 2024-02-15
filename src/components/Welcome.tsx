import js_logo from "@/../../public/images/js_logo.png";
import myPic from "@/../../public/images/myPic.png";
import { AppButton } from "@/components/common";
import Image from "next/image";
import type { PropsWithChildren } from "react";
import React from "react";
import { FaChevronDown, FaThumbsUp } from "react-icons/fa6";
import { Social } from "./Social";
import { AppTextonlyButton } from "./common/AppTextonlyButton";

type Props = React.FC<PropsWithChildren & {}>;

export const Welcome: Props = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 md:gap-y-10 xl:gap-y-16 pb-20 xl:pb-0">
      <div className="col-span-1 flex items-center order-2 lg:order-1">
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

          <div className="mt-12 flex justify-center gap-6 sm:gap-10 mx-auto sm:mx-0">
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
          <div className="flex flex-wrap items-center mt-14 gap-4 text-slate-400">
            <p>Find Me On</p>
            <hr className="w-10 border-t-[1px] border-t-textLightPrimary dark:border-t-PastelOrange" />
            <Social />
          </div>
        </div>
      </div>

      <div className="col-span-1 flex order-1 lg:order-2 pt-4 sm:pt-6 lg:pt-16">
        <div className="relative w-fit mx-auto xl:mx-0 pb-8 xl:pb-0">
          <div
            style={{
              maskImage: "url(/images/blob_bg.svg)",
              maskRepeat: "no-repeat",
              maskSize: "95%",
            }}
            className="xxs:h-[13rem] xs:h-[17rem] sm:h-[20rem] md:h-[25rem] lg:h-[27rem]"
          >
            <Image
              src={myPic}
              width={600}
              className="w-[28rem] lg:w-[30rem]"
              alt="Shourov Foisal"
            />
          </div>
          <div className="absolute -bottom-10 md:bottom-auto left-1/2 -translate-x-1/2 md:-translate-x-0 md:-top-16 md:-right-6 xl:-right-8 xxl:-right-10 flex gap-3">
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
