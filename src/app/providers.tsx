"use client";
import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

type Props = {};

export const Providers: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

/**
 * Applied dark/light mode with the following tutorial
 * https://www.youtube.com/watch?v=7zqI4qMDdg8
 * Next.js Dark Mode with No Flicker + Tailwind CSS
 * YT - Dave Gray
 */
