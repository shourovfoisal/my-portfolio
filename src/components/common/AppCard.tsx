import { iconGenerator } from "@/utils";
import { AppIconType } from "@/utils/iconGenerator";
import { RFC } from "./Types";

export type AppCardProps = {
  iconName: AppIconType;
  title: string;
  numberToShow: number;
};

export const AppCard: RFC<AppCardProps> = ({
  iconName,
  title,
  numberToShow,
}) => {
  return (
    <div className="aspect-square relative bg-BlackTan hover:bg-DarkerPastelOrange">
      <div className="absolute top-1/2 grid grid-cols-3 text-LightPastelOrange">
        <div className="col-span-1 pt-2 text-4xl">
          {iconGenerator(iconName, "mx-auto")}
        </div>

        <div className="col-span-1">
          <div className="w-1/2">
            <h2 className="text-2xl sm:text-3xl md:leading-6 md:text-xl lg:leading-normal lg:text-2xl xl:text-3xl leading-normal">
              {title}
            </h2>
            <p className="mt-3 sm:mt-6 md:mt-2 lg:mt-6 whitespace-nowrap md:text-sm lg:text-base">
              {numberToShow} Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
