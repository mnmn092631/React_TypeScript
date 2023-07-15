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
import { produce } from "immer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/13/Home";
import About from "./components/13/About";
import Profile from "./components/13/Profile";
import Articles from "./components/13/Articles";
import Article from "./components/13/Article";
import Layout from "./Layout";
import NotFound from "./components/13/NotFound";

// 11
// function createBulkTodos() {
//   const array: Array<TodoType> = [];
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할 일 ${i}`,
//       checked: false,
//     });
//   }
//   return array;
// }

// function todoReducer(todos: Array<TodoType>, action: ActionType) {
//   switch (action.type) {
//     case "INSERT":
//       return todos.concat(action.todo);
//     case "REMOVE":
//       return todos.filter(todo => todo.id !== action.id);
//     case "TOGGLE":
//       return todos.map(todo => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));
//     default:
//       return todos;
//   }
// }

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
  // const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // const nextId = useRef(2501);

  // const onInsert = useCallback((text: string) => {
  //   const todo: TodoType = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   // setTodos(todos => todos.concat(todo));
  //   dispatch({ type: "INSERT", todo });
  //   nextId.current += 1;
  // }, []);

  // const onRemove = useCallback((id: number) => {
  //   // setTodos(todos => todos.filter(todo => todo.id !== id));
  //   dispatch({ type: "REMOVE", id });
  // }, []);

  // const onToggle = useCallback((id: number) => {
  //   // setTodos(todos => todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  //   dispatch({ type: "TOGGLE", id });
  // }, []);

  // 12
  // interface ArrayType {
  //   id: number;
  //   name: string;
  //   username: string;
  // }

  // interface DataType {
  //   array: Array<ArrayType>;
  //   uselessValue: null;
  // }

  // interface FormType {
  //   name: string;
  //   username: string;
  //   [key: string]: string;
  // }

  // const nextId = useRef(1);
  // const [form, setForm] = useState({ name: "", username: "" });
  // const [data, setData] = useState<DataType>({ array: [], uselessValue: null });

  // const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   // setForm({
  //   //   ...form,
  //   //   [name]: [value],
  //   // });
  //   setForm(
  //     produce((draft: FormType) => {
  //       draft[name] = value;
  //     }),
  //   );
  // }, []);

  // const onSubmit = useCallback(
  //   (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const info = {
  //       id: nextId.current,
  //       name: form.name,
  //       username: form.username,
  //     };

  //     // setData({ ...data, array: data.array.concat(info) });
  //     setData(
  //       produce((draft: DataType) => {
  //         draft.array.push(info);
  //       }),
  //     );

  //     setForm({ name: "", username: "" });
  //     nextId.current += 1;
  //   },
  //   [form.name, form.username],
  // );

  // const onRemove = useCallback((id: number) => {
  //   // setData({ ...data, array: data.array.filter(info => info.id !== id) });
  //   setData(
  //     produce((draft: DataType) => {
  //       draft.array.splice(
  //         draft.array.findIndex(info => info.id === id),
  //         1,
  //       );
  //     }),
  //   );
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <Routes>
        {/* chapter 03 */}
        {/* <Route path="/03/MyComponent" element={<MyComponent name="React">children</MyComponent>} /> */}
        {/* <Route path="/03/Say" element={<Say />} /> */}

        {/* chapter 04 */}
        {/* <Route path="/04/EventPractice" element={<EventPractice />} /> */}

        {/* chapter 05 */}
        {/* <Route path="/05/ValidationSample" element={<ValidationSample />} /> */}
        {/* <div>
        <ScrollBox ref={scrollRef} />
        <button onClick={scrollToBottom}>맨 밑으로</button>
        </div> */}

        {/* chapter 06 */}
        {/* <Route path="/06/IterationSample" element={<IterationSample />} /> */}

        {/* chapter 08 */}
        {/* <Route path="/08/Counter" element={<Counter />} /> */}
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
        {/* <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate> */}

        {/* chapter 12 */}
        {/* <div>
        <form onSubmit={onSubmit}>
          <input name="username" placeholder="아이디" value={form.username} onChange={onChange} />
          <input name="name" placeholder="이름" value={form.name} onChange={onChange} />
          <button type="submit">등록</button>
        </form>
        <div>
          <ul>
            {data.array.map(info => (
              <li key={info.id} onClick={() => onRemove(info.id)}>
                {info.username} ({info.name})
              </li>
            ))}
          </ul>
          </div>
        </div> */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
