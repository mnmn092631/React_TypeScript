import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers: number[]): number => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    if (number === "" || isNaN(Number(number))) {
      alert("숫자를 입력해주세요");
      return;
    }
    const nextList = list.concat(Number(number));
    setList(nextList);
    setNumber("");
    inputEl.current?.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
