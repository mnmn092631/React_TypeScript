import React, { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import { theme } from "./styles/theme";
import MyComponent from "./components/03/MyComponent";
import Say from "./components/03/Say";
import EventPractice from "./components/04/EventPractice";
import ValidationSample from "./components/05/ValidationSample";
import ScrollBox from "./components/05/ScrollBox";
import IterationSample from "./components/06/IterationSample";
import Info from "./components/08/Info";
import Counter from "./components/08/Counter";
import ReducerCounter from "./components/08/ReducerCounter";
import ReducerInfo from "./components/08/ReducerInfo";

function App() {
  // 05 > ScrollBox
  // const scrollRef = useRef<HTMLDivElement>(null);
  // const scrollToBottom = () => {
  //   if (scrollRef.current) {
  //     const { scrollHeight, clientHeight } = scrollRef.current;
  //     scrollRef.current.scrollTop = scrollHeight - clientHeight;
  //   }
  // };

  // 08 > Info
  // const [visible, setVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}

      {/* chapter 03 */}
      {/* <MyComponent name="React">children</MyComponent> */}
      {/* <Say /> */}

      {/* chapter 04 */}
      {/* <EventPractice /> */}

      {/* chapter 05 */}
      {/* <ValidationSample /> */}
      {/* <div>
        <ScrollBox ref={scrollRef} />
        <button onClick={scrollToBottom}>맨 밑으로</button>
      </div> */}

      {/* chapter 06 */}
      {/* <IterationSample /> */}

      {/* chapter 08 */}
      {/* <Counter /> */}
      {/* <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr />
        {visible && <Info />}
      </div> */}
      {/* <ReducerCounter /> */}
      <ReducerInfo />
    </ThemeProvider>
  );
}

export default App;
