import { RFC } from "../common/Types";
import { StatsCTA } from "./StatsCTA";
import { StatsDetailed } from "./StatsDetailed";
import { StatsSummary } from "./StatsSummary";

export const Stats: RFC = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0">
        <div className="col-span-1">
          <div className="md:w-3/4">
            <StatsCTA />
          </div>
        </div>
        <div className="col-span-1">
          <StatsSummary />
        </div>
      </div>
      <div className="mt-20 lg:mt-32">
        <StatsDetailed />
      </div>
    </>
  );
};
