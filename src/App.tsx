import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
