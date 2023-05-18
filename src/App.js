import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { ligthTheme } from "./styles/theme";
import BroserRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={ ligthTheme }>
      <GlobalStyles />
      
      <BroserRoutes />
      
    </ThemeProvider>
  );
}

export default App;
