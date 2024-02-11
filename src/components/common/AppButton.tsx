import React, { PropsWithChildren } from "react";

type Props = React.AllHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
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
