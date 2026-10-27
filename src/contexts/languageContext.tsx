import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";

type LanguageContextType = {
  language: string;
  changeLanguage: () => void;
};

export const languageContext = createContext<LanguageContextType>({
  language: "English",
  changeLanguage: () => {},
});

type LanguageContextProviderType = {
  children: ReactNode;
};

const LanguageContextProvider = ({ children }: LanguageContextProviderType) => {
  const [language, setLanguage] = useState("English");

  const changeLanguage = () => {
    setLanguage((state) => (state === "English" ? "Hindi" : "English"));
  };
  return (
    <languageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageContextProvider;
