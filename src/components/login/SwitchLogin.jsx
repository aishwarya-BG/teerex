import React, { useState } from "react";
import Login from "./login";
import Register from "./register";
import classes from './switch.module.css';
import {Route} from 'react-router-dom';

const SwitchLogin = (props) => {

  const [isLogin, setIsLogin] = useState(true);
  const [userid, setUserid] = useState("");

  const signuphandler = () =>
  {
    setIsLogin(false);
  }

  const signinhandler = () =>
  {
    setIsLogin(true);
  }

  const Registerform = details =>
  {
    console.log(details);
  }

  return (
    <div className={classes.bodddy}>
    <div className={classes.form}>
      <ul className={classes.tabgroup}>
        <li className={classes.tabactive}>
          <a className = {classes.a} href="#signup" onClick={signuphandler}>Sign Up</a></li>
        <li className={classes.tab}>
          <a className = {classes.a} href="#login" onClick={signinhandler}>Sign In</a></li>
      </ul>
      {isLogin && <Login onSubmit={()=>console.log(userid)} setUserid={setUserid}/>}
      {!isLogin && <Register Registerform = {Registerform}/>}
    </div>
    </div>
  );
}

export default SwitchLogin;
