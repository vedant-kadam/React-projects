import { useState,useRef } from "react";

export default function Login() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const[formIsInvalid,setFormIsInvalid] = useState(false);
   
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit", "EMal" ,emailRef.current.value, " password " , passwordRef.current.value);

    const isEmailInValid = emailRef.current.value.includes("@");
    if(!isEmailInValid){
      setFormIsInvalid(true);
      return;
    }
    setFormIsInvalid(false);
  };
  

  

 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            
            ref={emailRef}
          />
          <div className="control-error">{formIsInvalid &&  <p>Please enter a valid email</p>}</div>

        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
