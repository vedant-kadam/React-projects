import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import question from "../data/question";

const Summary = ({ userAnswers }) => {

    const skippedAns = userAnswers.filter(ans=>ans===null);
    const correctAns = userAnswers.filter((ans,index)=>ans===question[index].answers[0]);

    const skippedAnsShare = Math.round( (skippedAns.length/ userAnswers.length) * 100);
    const correctAnsShare = Math.round((correctAns.length/userAnswers.length) * 100);
    const wrongAnsShare = 100 - skippedAnsShare - correctAnsShare;
    

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz complete image" />
      <h2>Quiz is Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnsShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans,index) => {
            let questionInfo = question[index];
            let cssClass = "user-answer";
            if(ans === null){
                cssClass+=" skipped";
            }else if(ans === questionInfo.answers[0]){
                cssClass+=" correct";
            }else{
                cssClass+= " wrong"
            }
          return (
            <li key={index}>
              <h3>{index+1}</h3>
              <p className="question">{questionInfo.text}</p>
              <p className={cssClass}>{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
