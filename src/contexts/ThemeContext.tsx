"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

type Theme = "light" | "dark";

type Context = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<Context>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
