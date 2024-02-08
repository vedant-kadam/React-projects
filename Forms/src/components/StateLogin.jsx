import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEmteredPassword] = useState("");

  const [userLoginData,setUserLoginData] = useState({
    email:"",
    password:""
  });

  
   
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  const hadelLoginInputChange = (event)=>{
    setUserLoginData((prev)=>{
      return ({
        ...prev,
        [event.target.name]:event.target.value
      })
    })
  }

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const handelPassWordChange = (event) => {
  //   setEmteredPassword(event.target.value);
  // };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={hadelLoginInputChange}
            id="email"
            type="email"
            name="email"
            value={userLoginData.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={hadelLoginInputChange}
            value={userLoginData.password}
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
