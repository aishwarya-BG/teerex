import React, { useState, useEffect } from "react";
import classes from "./Style.module.css";
import loginImg from "../../assets/banner21.png";
import { Link, useHistory } from "react-router-dom";
import { baseURL } from "../../constants/constant";

function Login(props) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const [userdata, setUserdata] = useState({ items: [], isLoaded: false });

  let name = JSON.parse(localStorage.getItem("userinfo"));

  let history = useHistory();

  const [error, setError] = useState(null);

  useEffect(() => {
    if (Object.keys(userdata.items).length !== 0) {
      console.log("gsag");
      {
        userdata.items.map((item) =>
          localStorage.setItem(
            "userinfo",
            JSON.stringify({
              userid: item.userId,
              username: item.username,
              role: item.role,
            })
          )
        );
      }
      history.push("/");
    }
  }, [userdata]);

  async function submitHandler(event) {
    event.preventDefault();

    const requestbody = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: details.username,
        password: details.password,
      }),
    };

    fetch(`${baseURL}/userapi/login`, requestbody)
      .then((res) => res.json())
      .then((result) => setUserdata({ items: result, isLoaded: true }))
      
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

  return (
    <div className={classes.base}>
      <div className={classes.header}>Tee-Rex says Hi!</div>
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
                type="password"
                name="password"
                placeholder="password"
                onChange={passwordChangeHandler}
              />
            </div>
          </div>
          <div className={classes.footer}>
            <button type="submit" className={classes.btn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
