import React, { useState } from 'react'
import logo from '../../assets/logoo.png'
import classes from './HeaderAdmin.module.css'
import { Link, useHistory } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'


function HeaderAdmin(props){

    let name = JSON.parse(localStorage.getItem("userinfo"));

    const history = useHistory();

    const logoutHandler = () =>
    {
        localStorage.clear();
        history.push("/")
    }

    const homeHandler = () =>
    {
        history.push("/");
    }

    return (
        
        <div>
            <header className={classes.header}>
                <img className = {classes.img} src={logo}/>
                <h1>Tee-Rex says Hi Admin {name.username}!</h1>
                {localStorage.getItem("userinfo") ?
                <Nav className="mr-sm-2 dropdown-menu-right">
                <NavDropdown title={name.username} className={classes.NavDropdown}>
                <NavDropdown.Item onClick={homeHandler}>Home</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>:null}
            </header>
   
        </div>
    )
}

export default HeaderAdmin
