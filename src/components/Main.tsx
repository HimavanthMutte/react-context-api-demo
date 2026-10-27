import { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

export default function Main() {
  const { theme, setTheme } = useContext(themeContext) as {
    theme: string;
    setTheme: (theme: string) => void;
  };

  return (
    <div>
      Main Component -{theme}
      <br />
      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
        Toggle theme
      </button>
    </div>
  );
}
