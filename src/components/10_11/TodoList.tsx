import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";
import { TodoType } from "src/shared/type";

interface ListProps {
  todos: Array<TodoType>;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const ListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }: ListProps) => {
  return (
    <ListWrapper>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </ListWrapper>
  );
};

export default React.memo(TodoList);
