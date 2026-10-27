import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";

export const themeContext = createContext({});

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState("Light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
