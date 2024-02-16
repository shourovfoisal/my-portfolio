import React from "react";
import { RFC } from "./Types";

type AppButtonProps = React.AllHTMLAttributes<HTMLButtonElement>;

const Button: RFC<AppButtonProps> = ({ children, className }) => {
  return (
    <button
      className={
        "w-36 font-medium h-16 rounded-2xl bg-themeGreen text-white " +
        className
      }
    >
      {children}
    </button>
  );
};

export const AppButton = Button;
