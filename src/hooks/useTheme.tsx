import { useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("Light");
  return { theme, setTheme };
}
