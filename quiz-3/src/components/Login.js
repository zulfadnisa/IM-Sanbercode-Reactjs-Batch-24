import React, { useState } from "react";
import Card from "../UI/css/Card";
import classes from "./Login.module.css";
import { LoginContext } from "./LoginContext";
import { useHistory } from "react-router-dom";
import Button from "../UI/css/Button";

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useContext(LoginContext);
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const history = useHistory();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername !== "admin") {
      return alert("username salah");
    } else if (enteredPassword !== "admin") {
      return alert("password salah");
    } else if (enteredPassword !== "admin" && enteredUsername !== "admin") {
      return alert("username dan password salah");
    } else {
      loginHandler(enteredUsername, enteredPassword);
    }
  };
  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    history.push("/");
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            required
          />
        </div>
        <div className={classes.control}>
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            required
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
