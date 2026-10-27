import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

export default function Footer() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div>
      Footer Component -{theme}
      <br />
      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
        Toggle theme
      </button>
    </div>
  );
}
