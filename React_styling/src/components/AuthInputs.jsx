import { useState } from "react";
import {styled }from 'styled-components';

import Button from "./Button.jsx";
import CustomInput from "./Input.jsx";
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
    <div id="auth-inputs">
      <ControlContainer>
        
          <CustomInput
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
          />
        
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button  onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
