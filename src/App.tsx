import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";
import MyComponent from "./components/03/MyComponent";
import Say from "./components/03/Say";
import EventPractice from "./components/04/EventPractice";
import ValidationSample from "./components/05/ValidationSample";
import ScrollBox from "./components/05/ScrollBox";
import IterationSample from "./components/06/IterationSample";

function App() {
  // 05 > ScrollBox
  // const scrollRef = useRef<HTMLDivElement>(null);
  // const scrollToBottom = () => {
  //   if (scrollRef.current) {
  //     const { scrollHeight, clientHeight } = scrollRef.current;
  //     scrollRef.current.scrollTop = scrollHeight - clientHeight;
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      {/* <MyComponent name="React">children</MyComponent> */}
      {/* <Say /> */}
      {/* <EventPractice /> */}
      {/* <ValidationSample /> */}
      {/* <div>
        <ScrollBox ref={scrollRef} />
        <button onClick={scrollToBottom}>맨 밑으로</button>
      </div> */}
      <IterationSample />
    </ThemeProvider>
  );
}

export default App;
