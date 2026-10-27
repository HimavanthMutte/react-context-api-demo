import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import ThemeContextProvider from "./contexts/themeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}
