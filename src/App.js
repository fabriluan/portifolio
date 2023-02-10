import { ThemeProvider } from "styled-components";
import Header from "./components/layout/Header";
import GlobalStyles from "./globalStyles";
import { ligthTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={ ligthTheme }>
      <GlobalStyles />
      
      <Header/>
      
    </ThemeProvider>
  );
}

export default App;
