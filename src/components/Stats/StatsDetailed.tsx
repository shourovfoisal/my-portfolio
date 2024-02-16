import { AppCard } from "../common";
import { RFC } from "../common/Types";

export const StatsDetailed: RFC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
      <div className="col-span-1">
        <AppCard
          iconName="FaReact"
          numberToShow={26}
          title="React.js Developer"
        />
      </div>
      <div className="col-span-1">
        <AppCard
          iconName="TbBrandNextjs"
          numberToShow={18}
          title="Next.js Developer"
        />
      </div>
      <div className="col-span-1">
        <AppCard
          iconName="FaNodeJs"
          numberToShow={35}
          title="Fullstack Developer"
        />
      </div>
    </div>
  );
};
