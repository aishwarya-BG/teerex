import React, { useState } from 'react'
import bannerimg from '../../assets/teerexi.png'
import logo from '../../assets/Capture.PNG'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

function Header(props){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        
        <div>
            <header className={classes.header}>
                <img src={logo}/>
                <h1>Tee-Rex says Hi {props.user.username}!</h1>
                <Link to ="/cart" className={classes.button1}>
                <button type="button" class="btn btn-success">Cart</button>
                </Link>
                {isLoggedIn &&
                <Link to ="/login" className={classes.button2}>
                <button type="button" class="btn btn-success">Logout</button>
                </Link>}
                {!isLoggedIn &&
                <Link to ="/login" className={classes.button2}>
                <button type="button" class="btn btn-success">Login</button>
                </Link>}
            </header>
        </div>
    )
}

export default Header
