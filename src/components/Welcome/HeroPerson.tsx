import myPic from "@/../../public/images/myPic.png";
import Image from "next/image";
import { RFC } from "../common/Types";

export const HeroPerson: RFC = () => {
  return (
    <div className="relative w-fit mx-auto xl:mx-0 pb-8 xl:pb-0">
      <div
        style={{
          maskImage: "url(/images/blob_bg.svg)",
          maskRepeat: "no-repeat",
          maskSize: "95%",
        }}
        className="xxs:h-[16.1rem] xs:h-[17.5rem] sm:h-[20.2rem] md:h-[25rem] lg:h-[27rem] overflow-clip"
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
          <span className="block text-right">Just a Click Away! &quot;</span>
        </p>
      </div>
    </div>
  );
};
