import React, { useCallback, useRef, useState } from "react";
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
import Average from "./components/08/Average";
import RefSample from "./components/08/RefSample";
import CustomHooksInfo from "./components/08/CustomHooksInfo";
import StyledComponent from "./components/09/StyledComponent";
import TodoTemplate from "./components/10/TodoTemplate";
import TodoInsert from "./components/10/TodoInsert";
import TodoList from "./components/10/TodoList";
import { TodoType } from "./components/10/type";

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

  // 10
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트의 기초 알아보기", checked: true },
    { id: 2, text: "컴포넌트 스타일링해 보기", checked: true },
    { id: 3, text: "일정 관리 앱 만들어 보기", checked: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text: string) => {
      const todo: TodoType = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id: number) => {
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    },
    [todos],
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

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
      {/* <ReducerInfo /> */}
      {/* <Average /> */}
      {/* <RefSample /> */}
      {/* <CustomHooksInfo /> */}

      {/* chapter 09 */}
      {/* <StyledComponent /> */}

      {/* chapter 10 */}
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </ThemeProvider>
  );
}

export default App;
