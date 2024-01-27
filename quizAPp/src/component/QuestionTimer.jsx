import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeOut,mode }) => {
  const [currentTime, setCurrentTime] = useState(timeout);
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime((prev) => prev - 100);
    }, 100);

    return ()=>{
        clearInterval(timeInterval);
    }
    //const timeOutRef =
  }, []);

  useEffect(() => {
    console.log("tim eout")
    const timeOutRef = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timeOutRef);
    };
  }, [timeout, onTimeOut]);

  return <progress className={mode} id="question-time" max={timeout} value={currentTime} />;
};

export default QuestionTimer;
