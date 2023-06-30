import React, { useReducer } from "react";

interface StateType {
  name: string;
  nickname: string;
}

interface ActionType {
  name: string;
  value: string;
}

function reducer(state: StateType, action: ActionType) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const ReducerInfo = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default ReducerInfo;
