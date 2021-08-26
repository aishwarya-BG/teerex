import React, { useState } from "react";
import classes from "./Style.module.css";
import loginImg from "../../assets/signuplogo.png";
import { baseURL } from "../../constants/constant";

function Register({ Registerform }) {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registermsg, setRegistermsg] = useState([]);
  const [errormsg, setErrormsg] = useState([]);
  const [error, setError] = useState(false);
  const [register, setRegister] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();

    const requestbody = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: details.username,
        password: details.password,
        email: details.email,
        role: "customer",
      }),
    };
    try{
    const response = await fetch(`${baseURL}/userapi/save`, requestbody);
    console.log(response);
    const result = await response.json();
    console.log(result);
    if (result) {
      setRegistermsg("You are now a Tee-Rex member!");
      setError(false);
      setRegister(true);
    }}
    catch (error)
    {
      console.error(error);
      setErrormsg("Username already taken");
      setError(true);
      setRegister(false);
    }

    Registerform(details);
  }

  const usernameChangeHandler = (event) => {
    setDetails((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const passwordChangeHandler = (event) => {
    setDetails((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    setDetails((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  return (
    <div className={classes.base}>
      <div className={classes.header}>Tee-Rex wants you to see his Tees!</div>
      <br></br>
      <div className={classes.content}>
        <div className={classes.img}>
          <img src={loginImg} />
        </div>
        <form onSubmit={submitHandler}>
          <div className={classes.form}>
            <div className={classes.formgroup}>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={usernameChangeHandler}
              />
            </div>
            <br></br>
            <div className={classes.formgroup}>
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={emailChangeHandler}
              />
            </div>
            <br></br>
            <div className={classes.formgroup}>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={passwordChangeHandler}
              />
            </div>
          </div>
          {register && <div className={classes.success}>{registermsg}</div>}
          {error && <div className={classes.invalid}>{errormsg}</div>}
          <div className={classes.footer}>
            <button type="submit" className={classes.btn}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
