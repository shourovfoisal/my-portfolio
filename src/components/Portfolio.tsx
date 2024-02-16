import website_1 from "@/../public/images/website_1.png";
import { AppCardImage, AppCardTransparent } from "@/components/common";
import { transparentCardData } from "@/data";
import { PropsWithChildren } from "react";

type Props = React.FC<PropsWithChildren & {}>;

export const Portfolio: Props = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
      <div className="col-span-1">
        <div className="flex flex-col gap-10 lg:gap-20">
          <AppCardTransparent {...transparentCardData.portfolioSection} />
          <AppCardImage image={website_1} />
        </div>
      </div>
      <div className="col-span-1">
        <div className="ml-auto flex flex-col gap-10 lg:gap-20">
          <AppCardImage image={website_1} />
          <AppCardImage image={website_1} />
        </div>
      </div>
    </div>
  );
};
