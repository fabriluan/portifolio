import { ThemeProvider } from "styled-components";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Project from "./components/layout/Project";
import GlobalStyles from "./globalStyles";
import { ligthTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={ ligthTheme }>
      <GlobalStyles />
      
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
      
    </ThemeProvider>
  );
}

export default App;
