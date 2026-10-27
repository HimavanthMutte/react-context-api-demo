import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useContext } from "react";
import { themeContext } from "./contexts/themeContext";

import "./App.css";

export default function App() {
  const { theme } = useContext(themeContext);
  return (
    <div className={`${theme}`}>
      <Header />
      <hr />
      <Main />
      <hr />
      <Footer />
    </div>
  );
}
