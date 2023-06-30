import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";
import MyComponent from "./components/03/MyComponent";
import Say from "./components/03/Say";
import EventPractice from "./components/04/EventPractice";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      {/* <MyComponent name="React">children</MyComponent> */}
      {/* <Say /> */}
      <EventPractice />
    </ThemeProvider>
  );
}

export default App;
