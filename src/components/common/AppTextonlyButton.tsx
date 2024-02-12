"use client";
import React, { PropsWithChildren } from "react";

type Props = {} & React.AllHTMLAttributes<HTMLDivElement>;

const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={
        "flex items-center gap-2 font-medium cursor-pointer " + className
      }
      onClick={() => {
        console.log("Download CV");
      }}
    >
      {children}
    </div>
  );
};

export const AppTextonlyButton = Button;
