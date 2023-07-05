import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

interface InsertProps {
  onInsert: (test: string) => void;
}

const InsertForm = styled.form`
  display: flex;
  background: #495057;

  & > input {
    background: none;
    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${props => props.theme.color.white};
    flex: 1;

    &::placeholder {
      color: #dee2e6;
    }
  }

  & > button {
    background: #868e96;
    color: ${props => props.theme.color.white};
    padding: 0 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.1s background ease-in;

    &:hover {
      background: #adb5bd;
    }
  }
`;

const TodoInsert = ({ onInsert }: InsertProps) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <InsertForm onSubmit={onSubmit}>
      <input type="text" placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </InsertForm>
  );
};

export default TodoInsert;
