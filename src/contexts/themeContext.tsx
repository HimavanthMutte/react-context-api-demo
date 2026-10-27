import { createContext } from "react";
import type { ReactNode } from "react";

import useTheme from "../hooks/useTheme";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const themeContext = createContext<ThemeContextType>({
  theme: "",
  setTheme: () => {},
});

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
