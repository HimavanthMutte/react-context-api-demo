import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";
import { languageContext } from "../contexts/languageContext";

export default function Main() {
  const { theme, setTheme } = useContext(themeContext);
  const { language, changeLanguage } = useContext(languageContext);
  return (
    <div>
      Main Component - {theme} - {language}
      <br />
      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
        Toggle theme
      </button>
      <br />
      <button onClick={changeLanguage}>Toggle Language</button>
    </div>
  );
}
