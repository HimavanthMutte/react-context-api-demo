import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";
import { languageContext } from "../contexts/languageContext";
export default function Header() {
  const { theme, setTheme } = useContext(themeContext);
  const { language, changeLanguage } = useContext(languageContext);
  return (
    <div className="component-card header-card">
      <div className="component-heading">
        Header Component <span className="component-state">{theme}</span>
      </div>
      <div className="component-detail">Current language: {language}</div>
      <div className="component-actions">
        <button
          className="action-button"
          onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}
        >
          Toggle theme
        </button>
        <button className="action-button secondary-button" onClick={changeLanguage}>
          Toggle Language
        </button>
      </div>
    </div>
  );
}
