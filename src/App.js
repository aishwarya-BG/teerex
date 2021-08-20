import React, { useState } from "react";
import "./App.css";
import SwitchLogin from "./components/login/SwitchLogin";
import Home from "./components/ProductPage/home";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import Newii from "./components/new/Newii";
import Cart from "./components/cart/Cart";


const App = (props) => {
  const [user, setUser] = useState({ username: "" });

  const loginform = (id) => {
    console.log(id);
    
  };

  const Logout = (details) => {
    console.log("Logout");
    setUser({
      username: "",
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <SwitchLogin loginform={loginform}/>
          </Route>
          <Route excet path="/">
            <Home user={user} Logout={Logout} />
          </Route>
          <Route path="/newii">
            <Newii />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
