import React, { PropsWithChildren } from "react";
import { FaCode } from "react-icons/fa";

type Props = {};

export const Footer: React.FC<PropsWithChildren<Props>> = () => {
  return (
    <div>
      <div className="flex justify-center text-5xl text-themeGreen dark:text-PastelOrange">
        <FaCode />
      </div>
      <p className="mt-3 text-textLightPrimary dark:text-LightPastelOrange text-center">
        Thanks for scrolling
      </p>
      <p className="mt-3 text-textLightPrimary dark:text-LightPastelOrange text-center">
        Copyright &copy;2023 Shourov Foisal
      </p>
    </div>
  );
};
