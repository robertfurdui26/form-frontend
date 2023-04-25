import React, { useState } from "react";
import Axios from "axios";

export default function Form() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      userName: usernameReg,
      password: passwordReg,
    }).then((responese) => {
      console.log(responese);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      userName: username,
      password: password,
    }).then((responese) => {
      if (responese.data.message) {
        setLoginStatus(responese.data.message);
      } else {
        setLoginStatus(responese.data.message.userName);
      }
    });
  };

  return (
    <div>
      <div className="registration">
        <h1>Registration</h1>
        <label>UserName</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          placeholder="Your name.."
        />

        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          placeholder="Password..."
        />
        <input type="submit" value="Register" onClick={register}></input>
      </div>

      <div className="login">
        <h1>LogIn</h1>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="UserName..."
        />
        <input
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password..."
        />
        <input type="submit" onClick={login} value="LogIn"></input>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}
