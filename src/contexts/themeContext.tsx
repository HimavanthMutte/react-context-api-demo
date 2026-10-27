import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";

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
  const [theme, setTheme] = useState("Light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
