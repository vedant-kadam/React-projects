import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../Hooks/useInput";
export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEmteredPassword] = useState("");

  const {
    enteredValue: emailValue,
    handelInputBlur: hadleEmailBlur,
    hadelLoginInputChange: handleEmailChange,
    didEdit: emailDidEdit,
    hasError: emailHasError,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });
  const {
    enteredValue: passwordValue,
    handelInputBlur: handlePassBlur,
    hadelLoginInputChange: handlePassChange,
    didEdit: passDidEdit,
    hasError: passwordHasError,
  } = useInput("", (val) => hasMinLength(val, 6));

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={hadelLoginInputChange}
            id="email"
            type="email"
            name="email"
            value={userLoginData.email}
            onBlur={handelInputBlur}
          />
          <div className="control-error">{isEmailValid &&  <p>Please enter a valid email</p>}</div>
        </div> */}
        <Input
          label="Email"
          onChange={handleEmailChange}
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onBlur={hadleEmailBlur}
          error={emailHasError && <p>Please enter a valid email</p>}
        />
        <Input
          label="Password"
          onChange={handlePassChange}
          id="password"
          type="password"
          name="password"
          value={passwordValue}
          onBlur={handlePassBlur}
          error={passwordHasError && <p>Please enter a valid password</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
