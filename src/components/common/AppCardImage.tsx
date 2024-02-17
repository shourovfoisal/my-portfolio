import Image, { StaticImageData } from "next/image";
import { RFC } from "./Types";

export type AppCardImageProps = {
  image: string | StaticImageData;
  title: string;
  categories: string[];
};

export const AppCardImage: RFC<AppCardImageProps> = ({
  image,
  categories,
  title,
}) => {
  return (
    <div className="w-full bg-NightBlack flex flex-col gap-4 md:gap-6 xl:gap-16 aspect-[1/1.1] overflow-hidden cursor-pointer">
      <div className="flex justify-between items-center text-LightPastelOrange p-10 pb-0 md:p-5 md:pb-0 lg:p-10 lg:pb-0">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl">
          {title}
        </h2>
        <h3 className="text-sm md:text-xs lg:text-sm flex gap-2">
          {Array.isArray(categories) &&
            categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
        </h3>
      </div>
      <div>
        <Image src={image} alt="Website 1" />
      </div>
    </div>
  );
};
