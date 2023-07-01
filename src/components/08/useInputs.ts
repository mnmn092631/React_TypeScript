import React, { useReducer } from "react";

interface StateType {
  name: string;
  nickname: string;
}

interface ActionType {
  name: string;
  value: string;
}

function reducer(state: StateType, action: ActionType): StateType {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm: StateType) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return [state, onChange] as const;
}
