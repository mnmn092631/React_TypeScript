import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1);

  const setId = (e: React.ChangeEvent<HTMLInputElement>) => {
    id.current = Number(e.target.value);
  };

  const printId = () => {
    console.log(`id는 ${id.current} 입니다.`);
  };

  return (
    <div>
      <h1>RefSample</h1>
      <input type="text" onChange={setId} placeholder="숫자를 입력해주세요" />
      <button onClick={printId}>id 출력</button>
    </div>
  );
};

export default RefSample;
