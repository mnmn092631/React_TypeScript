import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";
import { TodoType } from "src/shared/type";
import { List, ListRowProps } from "react-virtualized";

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
  const rowRenderer = useCallback(
    ({ index, key, style }: ListRowProps) => {
      const todo = todos[index];
      return <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />;
    },
    [onRemove, onToggle, todos],
  );
  return (
    <ListWrapper>
      <List
        className="TodoList"
        width={512}
        height={513}
        rowCount={todos.length}
        rowHeight={57}
        rowRenderer={rowRenderer}
        list={todos}
        style={{ outline: "none" }}
      />
    </ListWrapper>
  );
};

export default React.memo(TodoList);
