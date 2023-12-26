import { useState } from "react";
import {styled }from 'styled-components';

import Button from "./Button.jsx";
import CustomInput from "./Input.jsx"; 
import MainInput from "./MainInput.jsx";
import MainButton from "./MainButton.jsx";
export default function AuthInputs() {


   const ControlContainer = styled.div`
    display:flex,
    flex-direction:column,
    gap:0.5rem,
    margin-bottom:1.5rem 
   `;
   

   
   

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b  from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-3">
        
          {/* <CustomInput
            lable="Email"
            invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        
       
          <CustomInput
            type="password"
            invalid={passwordNotValid}
            lable="Password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          /> */}
         
          <MainInput
            lable="Email"
            invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        
       
          <MainInput
            type="password"
            invalid={passwordNotValid}
            lable="Password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />

      </div>
      <div className="flex justify-end gap-4 ">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <MainButton  onClick={handleLogin}>
          Sign In
        </MainButton>
      </div>
    </div>
  );
}
