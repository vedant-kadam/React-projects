import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  let timer = useRef();
  let dialog = useRef();

  const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);

  const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

  if (timeRemaning <= 0) {
    clearInterval(timer.current);
    //setTimeRemaning(targetTime * 1000);
    dialog.current.open();
  }

  function handelReset() {
    setTimeRemaning(targetTime * 1000);
  }

  function handelStart() {
    timer.current = setInterval(() => {
      //  setTimerExpired(true);
      //  dialog.current.open();
      setTimeRemaning((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remaningTime={timeRemaning}
        onReset=  {handelReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handelStart}>
            {timerIsActive ? "Stop" : "Start"} Chanllenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is Running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
