import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 첫 렌더링, 리렌더링될 때
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!");
    console.log({ name, nickname });
  });

  // 마운트될 때만
  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
  }, []);

  // 특정 값이 업데이트 될 때만
  useEffect(() => {
    console.log(name);
  }, [name]);

  // 언마운트 되기 전이나 업데이트되기 직전 -> cleanup 함수 반환
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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

export default Info;
