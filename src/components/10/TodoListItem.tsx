import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import styled from "styled-components";
import { TodoType } from "./type";

interface ItemProps {
  todo: TodoType;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

const ItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(2n) {
    background: #f8f9fa;
  }

  & > div:first-child {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    & > div {
      margin-left: 0.5rem;
      flex: 1;
    }

    &.checked {
      svg {
        color: #22b8cf;
      }
      & > div {
        color: #adb5bd;
        text-decoration: line-through;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }: ItemProps) => {
  return (
    <ItemWrapper>
      <div className={todo.checked ? "checked" : ""} onClick={() => onToggle(todo.id)}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div>{todo.text}</div>
      </div>
      <div onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </div>
    </ItemWrapper>
  );
};

export default TodoListItem;
