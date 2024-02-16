import { RFC } from "../common/Types";
import { HeroCTA } from "./HeroCTA";
import { HeroPerson } from "./HeroPerson";

export const Welcome: RFC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 md:gap-y-10 xl:gap-y-16 pb-10 lg:pb-20">
      <div className="col-span-1 flex items-center order-2 lg:order-1">
        <HeroCTA />
      </div>
      <div className="col-span-1 flex order-1 lg:order-2 pt-5 md:pt-16">
        <HeroPerson />
      </div>
    </div>
  );
};
