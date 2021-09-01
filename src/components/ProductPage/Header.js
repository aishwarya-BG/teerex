import React, { useState } from "react";
import bannerimg from "../../assets/teerexi.png";
import logo from "../../assets/logoo.png";
import classes from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  let name = JSON.parse(localStorage.getItem("userinfo"));

  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  const adminHandler = () => {
    history.push("/admin");
  };

  return (
    <div>
      <header className={classes.header}>
        <img className={classes.img} src={logo} />
        {!localStorage.getItem("userinfo") && <h1>Tee-Rex says Hi!</h1>}
        {localStorage.getItem("userinfo") && (
          <h1>Tee-Rex says Hi {name.username}!</h1>
        )}
        <div className={classes.button1}>
          <HeaderCartButton onClick={props.onShowcart} />
        </div>
        {localStorage.getItem("userinfo") ? (
          <Nav
            className="mr-sm-2 dropdown-menu-right"
            style={{ position: "absolute", right: "24px" }}
          >
            <NavDropdown title={name.username} className={classes.NavDropdown}>
              {name.role == "admin" && (
                <NavDropdown.Item onClick={adminHandler}>
                  Admin
                </NavDropdown.Item>
              )}
              <NavDropdown.Item onClick={props.onShowOrders}>
                My Orders
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
        {!localStorage.getItem("userinfo") && (
          <Link to="/login" className={classes.button2}>
            <button type="button" className="btn btn-success btn-lg">
              Login
            </button>
          </Link>
        )}
      </header>
    </div>
  );
}

export default Header;
