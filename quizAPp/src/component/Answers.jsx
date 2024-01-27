import React, { useRef } from "react";

const Answers = ({ answers, selectedAns, answerState,handleSelectAnswer }) => {
  const shufflerAnsRef = useRef(null);

  if (!shufflerAnsRef.current) {
    shufflerAnsRef.current = [
      ...answers,
    ].sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shufflerAnsRef.current.map((answer, index) => {
        const isSelected = selectedAns === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li className="answer" key={index}>
            <button
              className={cssClasses}
              onClick={() => handleSelectAnswer(answer)}
              disabled={answerState !== ""}
            >
              {" "}
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
