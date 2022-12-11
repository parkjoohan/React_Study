import React from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minutesState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  }
  return (
    <div>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder='Minutes'></input>
      <input value={hours} type="number" placeholder='Hours'></input>
    </div>
  );
}

export default App;
