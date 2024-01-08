import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  

  let timer = useRef();
  let dialog = useRef();

  function handelStart() {
    setTimerStarted(true);

   timer.current =  setTimeout(() => {
       setTimerExpired(true);
       dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop(){
    clearTimeout(timer.current);
  }

  return (
    <>
     <ResultModal ref={dialog} targetTime={targetTime} result="Lost"/>
     <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost !</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={ timerStarted ? handleStop :  handelStart}>
           {timerStarted  ? "Stop":"Start"}  Chanllenge</button>
      </p>
      <p className={timerStarted ? "active":undefined}>
        {timerStarted  ? "Time is Running" : "Timer Inactive"}
      </p>
    </section>
    </>
   
  );
};

export default TimerChallenge;
