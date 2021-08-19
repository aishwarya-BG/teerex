import React from 'react'
import bannerimg from '../../assets/teerexi.png'
import logo from '../../assets/Capture.PNG'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'

function Header(props){
    return (
        <div>
            <header className={classes.header}>
                <img src={logo}/>
                <h1>Tee-Rex says Hi {props.user.username}!</h1>
                <Link to ="/cart">
                <button className={classes.button1}>Cart</button>
                </Link>
                <Link to ="/login" className={classes.button2}>
                <button className={classes.button2}>Logout</button>
                </Link>
            </header>
        </div>
    )
}

export default Header
