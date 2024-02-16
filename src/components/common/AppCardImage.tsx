import Image from "next/image";
import { RFC } from "./Types";

export type AppCardImageProps = { image: any };

export const AppCardImage: RFC<AppCardImageProps> = ({ image }) => {
  return (
    <div className="w-full bg-NightBlack flex flex-col gap-16 md:gap-6 xl:gap-16 aspect-[1/1.1] overflow-hidden cursor-pointer">
      <div className="flex justify-between items-center text-LightPastelOrange p-10 pb-0 md:p-5 md:pb-0 lg:p-10 lg:pb-0">
        <h2 className="text-3xl md:text-2xl xl:text-3xl">Movies Zone</h2>
        <h3 className="text-sm md:text-xs xl:text-sm flex gap-2">
          <span>Movies,</span>
          <span>Audiences</span>
        </h3>
      </div>
      <div>
        <Image src={image} alt="Website 1" />
      </div>
    </div>
  );
};
