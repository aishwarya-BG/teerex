import React, { useState } from 'react'
import bannerimg from '../../assets/teerexi.png'
import logo from '../../assets/logoo.png'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'


function Header(props){

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        
        <div>
            <header className={classes.header}>
                <img className = {classes.img} src={logo}/>
                <h1>Tee-Rex says Hi {props.user.username}!</h1>
                <Link to ="/cart" className={classes.button1}>
                <button type="button" class="btn btn-success">Cart</button>
                </Link>
                {!isLoggedIn &&
                <Link to ="/login" className={classes.button2}>
                <button type="button" class="btn btn-success">Logout</button>
                </Link>}
                {isLoggedIn &&
                <Link to ="/login" className={classes.button2}>
                <button type="button" class="btn btn-success">Login</button>
                </Link>}
            </header>
        </div>
    )
}

export default Header
