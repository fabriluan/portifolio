import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { ligthTheme, darkTheme } from "./styles/theme";
import BroserRoutes from "./routes";
import { useContext } from "react";
import { AuthContext } from "./contexts/theme";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { theme } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme ?  ligthTheme : darkTheme }>
      <GlobalStyles />
      <ToastContainer theme="colored" autoClose={3000}/>

      <BroserRoutes />
      
    </ThemeProvider>
  );
}

export default App;
