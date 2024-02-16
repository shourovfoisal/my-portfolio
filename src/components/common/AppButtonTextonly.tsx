"use client";
import React from "react";
import { RFC } from "./Types";

type AppButtonTextonlyProps = {} & React.AllHTMLAttributes<HTMLDivElement>;

const Button: RFC<AppButtonTextonlyProps> = ({
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

export const AppButtonTextonly = Button;
