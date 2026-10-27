import { createContext } from "react";

import type { ReactNode } from "react";
import useLanguage from "../hooks/useLanguage";

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
  const { language, changeLanguage } = useLanguage();

  return (
    <languageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageContextProvider;
