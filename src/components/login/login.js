import React, { useState, useEffect } from "react";
import classes from "./Style.module.css";
import loginImg from "../../assets/banner21.png";
import { Link, useHistory } from "react-router-dom";
import { baseURL } from "../../constants/constant";

function Login(props) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const [userdata, setUserdata] = useState([]);

  let name = JSON.parse(localStorage.getItem("userinfo"));

  let history = useHistory();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (Object.keys(userdata).length !== 0) {
      console.log("gsag");
      {
        userdata.map((item) =>
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

    try {
      const URL = `${baseURL}/userapi/login`,
        requestbody = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: details.username,
            password: details.password,
          }),
        };
      const res = await fetch(URL, requestbody);
      const result = await res.json();
      console.log({ result });
      if (result && result.length > 0) {
        setError(false);
        setErrorMessage("");
        setUserdata(result);
      } else {
        setError(true);
        setErrorMessage("Username or Password not matched");
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage("Something Went Wrong, Please try again.");
    }
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
      <h2>Tee-Rex says Hi!</h2>
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
          {!!error && <div className={classes.invalid}>{errorMessage}</div>}
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
