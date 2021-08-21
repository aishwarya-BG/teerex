import React, { useState } from 'react'
import bannerimg from '../../assets/teerexi.png'
import logo from '../../assets/logoo.png'
import classes from './Header.module.css'
import { Link, useHistory } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'
import HeaderCartButton from './HeaderCartButton'


function Header(props){

    let name = JSON.parse(localStorage.getItem("userinfo"));

    const history = useHistory();

    const logoutHandler = () =>
    {
        localStorage.clear();
        window.location.reload(false);
    }

    return (
        
        <div>
            <header className={classes.header}>
                <img className = {classes.img} src={logo}/>
                {!localStorage.getItem("userinfo") && <h1>Tee-Rex says Hi!</h1>}
                {localStorage.getItem("userinfo") && <h1>Tee-Rex says Hi {name.username}!</h1>}
                <div  className={classes.button1}>
                <HeaderCartButton onClick={props.onShowcart}/>
                </div>
                {localStorage.getItem("userinfo") ?
                <Nav className="mr-sm-2 dropdown-menu-right">
                <NavDropdown title={name.username} className={classes.NavDropdown}>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>:null}
                {!localStorage.getItem("userinfo") &&
                <Link to ="/login" className={classes.button2}>
                <button type="button" class="btn btn-success">Login</button>
                </Link>}
            </header>
   
        </div>
    )
}

export default Header
