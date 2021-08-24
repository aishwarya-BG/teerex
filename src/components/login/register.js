import React, { useState } from "react";
import classes from './Style.module.css';
import loginImg from '../../assets/signuplogo.png';
import { baseURL } from "../../constants/constant";

function Register({Registerform}) 
{
    const [details, setDetails] = useState({username: "", email: "", password: ""});

    async function submitHandler(e) {
        e.preventDefault();

        const requestbody = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:details.username,
                password: details.password,
                email: details.email
            })
        }
        const response = await fetch(`${baseURL}/userapi/save`, requestbody);
        Registerform(details);
    }
    
    const usernameChangeHandler = (event) =>
    {
        setDetails((prevState) => {
            return { ...prevState,
                     username: event.target.value,
                    };
        });
    }
    
    const passwordChangeHandler = (event) =>
    {
        setDetails((prevState) => {
            return { ...prevState,
                     password: event.target.value,
                    };
        });
    }

    const emailChangeHandler = (event) =>
    {
        setDetails((prevState) => {
            return { ...prevState,
                     email: event.target.value,
                    };
        });
    }

    return (
        <div className={classes.base}>
        <div className={classes.header}>Tee-Rex wants you to see his Tees!</div>
        <br></br>
        <div className={classes.content}>
            <div className={classes.img}>
                <img src={loginImg}/>
            </div>
        <form onSubmit={submitHandler}>
        <div className={classes.form}>
                <div className={classes.formgroup}>
                    <input type="text" name="username" placeholder="username" onChange={usernameChangeHandler}/>
                </div>
                <br></br>
                <div className={classes.formgroup}>
                    <input type="text" name="email" placeholder="email" onChange={emailChangeHandler}/>
                </div>
                <br></br>
                <div className={classes.formgroup}>
                    <input type="password" name="password" placeholder="password" onChange={passwordChangeHandler}/>
                </div>
            </div>
            <div className={classes.footer}>
            <button type="submit" className={classes.btn}>Register</button>
            </div>
        </form>
        </div>
        </div>
    )
}
export default Register;