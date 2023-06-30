import React, { useRef, useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);

  const pwRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClick = () => {
    setClicked(true);
    setValidated(password === "0000");
    if (pwRef.current) pwRef.current.focus();
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={onChange}
        ref={pwRef}
        className={clicked ? (validated ? "success" : "failure") : ""}
      />
      <button onClick={onClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
