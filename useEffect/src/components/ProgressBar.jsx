import React, { useEffect, useState } from "react";
const TIMER_VAL = 3000;
const ProgressBar = () => {
  const [remaningTime, setRemaningTime] = useState(TIMER_VAL);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemaningTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return  <progress value={remaningTime} max={TIMER_VAL}  />;
};

export default ProgressBar;
