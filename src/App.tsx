import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import ThemeContextProvider from "./contexts/themeContext";
import LanguageContextProvider from "./contexts/languageContext";

export default function App() {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <div>
          <Header />
          <hr />
          <Main />
          <hr />
          <Footer />
        </div>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}
