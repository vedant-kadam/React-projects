import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import question from "../data/question";

const Question = ({
  questionIndex,

  handleSelectAnswer,

  handelSkipAns,
}) => {
  const [answer, setAnswer] = useState({
    selectedAns: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAns) {
    timer = 1000;
  }
  if (answer.isCorrect) {
    timer = 2000;
  }

  function handleSelectAns(ans) {
    setAnswer({
      selectedAns: ans,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAns: ans,
        isCorrect: question[questionIndex].answers[0] === ans,
      });

      setTimeout(() => {
        handleSelectAnswer(ans);
      }, 2000);
    }, 1000);
  }
  let ansState = "";
  if (answer.selectedAns && answer.isCorrect !== null) {
    ansState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAns) {
    ansState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={10000}
        onTimeOut={ answer.selectedAns===""? handelSkipAns: null}
        mode={ansState}
      />
      <h2>{question[questionIndex].text}</h2>
      <Answers
        answers={question[questionIndex].answers}
        selectedAns={answer.selectedAns}
        answerState={ansState}
        handleSelectAnswer={handleSelectAns}
      />
    </div>
  );
};

export default Question;
