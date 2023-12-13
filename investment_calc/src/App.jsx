import { useState } from "react";
import Header from "./components/Header";
import Userinput from "./components/Userinput";
import "./index.css";
import Result from "./components/Result";

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  });


  function handelInputValChange(e){
    console.log(e.target.name)
    setUserInput((prevIp)=>{
      let oldVal = {...prevIp};
      oldVal[e.target.name.trim()] = +e.target.value;
      //console.log(oldVal)
      return oldVal;
    })
  }

  const isInputValid = userInput.duration >= 1;
  console.log(isInputValid)
  return (
    <>
      <Header/>
      <Userinput inputVals = {userInput} hadelInputValChange = {handelInputValChange}/>
      {!isInputValid ? <p className="center">Please enter duration greater than zero</p> :
      <Result input={userInput}/> }
    </>
  )
}

export default App
