import Link from "next/link";
import type { PropsWithChildren } from "react";
import React from "react";
import { FaTerminal } from "react-icons/fa6";
import ThemeSwitch from "./common/ThemeSwitch";

type Props = React.FC<PropsWithChildren & {}>;

export type NavigationItem = {
  label: string;
  link: string;
};

export const navigationData: NavigationItem[] = [
  { label: "Services", link: "/services" },
  { label: "Works", link: "/works" },
  { label: "Blog", link: "/blog" },
];

export const Navbar: Props = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center md:justify-start mb-4 md:mb-0 text-textLightPrimary dark:text-PastelOrange">
        <Link href={`/`} className="flex gap-3 items-center text-2xl">
          <FaTerminal className="text-themeGreen" />
          <div className="mb-1">Dev Shourov</div>
        </Link>
      </div>
      <ul className="navbar flex justify-center md:justify-end items-center text-base gap-6">
        {navigationData?.map((item) => (
          <li key={item.link}>
            <Link
              className="text-textLightPrimary dark:text-AshGray"
              href={item.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </div>
  );
};
