import { ThemeProvider } from "styled-components";
import About from "./components/layout/About";
import Header from "./components/layout/Header";
import GlobalStyles from "./globalStyles";
import { ligthTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={ ligthTheme }>
      <GlobalStyles />
      
      <Header />
      <About />
      
    </ThemeProvider>
  );
}

export default App;
