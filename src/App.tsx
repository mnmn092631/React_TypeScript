import React, { useCallback, useRef, useState, useReducer } from "react";
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
import TodoTemplate from "./components/10_11/TodoTemplate";
import TodoInsert from "./components/10_11/TodoInsert";
import TodoList from "./components/10_11/TodoList";
import { ActionType, TodoType } from "./shared/type";

// 11
function createBulkTodos() {
  const array: Array<TodoType> = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos: Array<TodoType>, action: ActionType) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return todos.map(todo => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));
    default:
      return todos;
  }
}

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

  // 10, 11
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text: string) => {
    const todo: TodoType = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos(todos => todos.concat(todo));
    dispatch({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    // setTodos(todos => todos.filter(todo => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id: number) => {
    // setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
    dispatch({ type: "TOGGLE", id });
  }, []);

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

      {/* chapter 10, 11 */}
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </ThemeProvider>
  );
}

export default App;
