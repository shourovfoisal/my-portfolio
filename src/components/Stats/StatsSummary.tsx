import { RFC } from "../common/Types";

export const StatsSummary: RFC = () => {
  return (
    <div className="lg:pl-10 ml-auto">
      <h2 className="text-3xl leading-10 text-textLightPrimary dark:text-LightPastelOrange">
        What does make a client more happy than a beautiful app?
      </h2>

      <h4 className="text-textLightPrimary dark:text-AshGray mt-5 text-sm leading-6">
        For more than three years, I have handled numerous clients who are
        impressed in my web development skills and abilities. Also, I being a
        good communcator have satisfied my client&apos;s needs with great
        accuracy.
      </h4>

      <div className="max-w-full grid grid-cols-2 mt-10 gap-y-10 lg:gap-y-0">
        <div className="col-span-2 md:col-span-1">
          <LargeNumberStat
            count={3}
            firstLineText="Years of"
            secondLineText="Experience"
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <LargeNumberStat
            count={28}
            firstLineText="Satisfied"
            secondLineText="Clients"
          />
        </div>
      </div>
    </div>
  );
};

type LargeNumberStatProp = {
  count: number;
  firstLineText: string;
  secondLineText: string;
};

const LargeNumberStat: RFC<LargeNumberStatProp> = ({
  count,
  firstLineText,
  secondLineText,
}) => {
  return (
    <div className="flex gap-4 items-end text-textLightPrimary dark:text-LightPastelOrange">
      <div className="text-9xl font-medium text-themeGreen dark:text-PastelOrange leading-[5.8rem]">
        {count}
      </div>
      <div>
        {firstLineText}
        <span className="block">{secondLineText}</span>
      </div>
    </div>
  );
};
