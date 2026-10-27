import { useState } from "react";

export default function useLanguage() {
  const [language, setLanguage] = useState("English");
  const changeLanguage = () => {
    setLanguage((state) => (state === "English" ? "Hindi" : "English"));
  };
  return { language, changeLanguage };
}
