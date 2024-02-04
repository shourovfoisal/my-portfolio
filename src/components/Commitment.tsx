import React, { PropsWithChildren } from "react";
import { RegularCard, TransparentCard } from "@/components/common";
import { transparentCardData } from "@/data";

type Props = React.FC<PropsWithChildren & {}>;

export const Commitment: Props = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <div className="w-3/4">
            <TransparentCard {...transparentCardData.commitmentSection} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-3/4 ml-auto">
            <h2 className="text-3xl leading-10 text-LightPastelOrange">
              What does make a client more happy than a beautiful app?
            </h2>
            <h4 className="text-AshGray mt-5 text-sm leading-6">
              For more than three years, I have handled numerous clients who are
              impressed in my web development skills and abilities. Also, I
              being a good communcator have satisfied my client&apos;s needs
              with great accuracy.
            </h4>
            <div className="max-w-full grid grid-cols-2 mt-10">
              <div className="col-span-2 md:col-span-1 flex gap-5 items-end text-LightPastelOrange">
                <div className="text-9xl font-medium text-PastelOrange leading-[5.8rem]">
                  3
                </div>
                <div>
                  Years of<span className="block">Experience</span>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1 flex gap-5 items-end text-LightPastelOrange">
                <div className="text-9xl font-medium text-PastelOrange leading-[5.8rem]">
                  28
                </div>
                <div>
                  Satisfied<span className="block">Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-32">
        <div className="col-span-1">
          <RegularCard
            iconName="FaReact"
            numberOfProjects={26}
            title="React.js Developer"
          />
        </div>
        <div className="col-span-1">
          <RegularCard
            iconName="TbBrandNextjs"
            numberOfProjects={18}
            title="Next.js Developer"
          />
        </div>
        <div className="col-span-1">
          <RegularCard
            iconName="FaNodeJs"
            numberOfProjects={35}
            title="Fullstack Developer"
          />
        </div>
      </div>
    </>
  );
};
