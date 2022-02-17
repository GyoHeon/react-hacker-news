import { whiteTheme, darkTheme } from "./styles/theme";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const isWhite = useSelector((state) => state.themeChange.isWhite);

  return (
    <ThemeProvider theme={isWhite ? whiteTheme : darkTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
