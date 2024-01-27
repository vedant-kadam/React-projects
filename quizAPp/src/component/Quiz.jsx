import React, { useCallback, useRef } from "react";
import { useState } from "react";
import QUESTIONS from "../data/question";

import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentActiveQuestionIndex =
  userAnswers.length

  const isQuizCompleted = currentActiveQuestionIndex === QUESTIONS.length;

  //we add a dependency to this call back because the parms of this settimeout function changes
  const handleSelectAnswer = useCallback(
    function (selectedAns) {
      setUserAnswers((prevUserAns) => {
        return [...prevUserAns, selectedAns];
      });
      
    },
    []
  );

  const handelSkipAns = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizCompleted) {
    return (
      <Summary userAnswers={userAnswers}/>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={currentActiveQuestionIndex}
        handleSelectAnswer={handleSelectAnswer}
        handelSkipAns={handelSkipAns}
        questionIndex={currentActiveQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
