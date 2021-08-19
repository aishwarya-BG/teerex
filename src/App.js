import React, { useState } from "react";
import Login from "./components/login/login";
import Register from "./components/login/register";
import './App.css';
import Switch from "./components/login/switch";
import Indexs from "./components/ProductPage/indexs";
import UserComponent from "./components/entity/UserComponent";
import { Route } from "react-router-dom";
import Newii from "./components/new/Newii";
import Cart from "./components/cart/Cart";

const App = (props) => {

  const [user, setUser] = useState({username: ""});
  const [error, setError] = useState("");

  const loginform = details =>
  {
    console.log("Heyyy!");
    setUser({
      username:details.username
    })

  }

  const Logout = (details) =>
  {
    console.log("Logout");
    setUser({
      username:""
    })
  } 

  return (
    <div className="App">
      <Route path="/login">
        <Switch/>
      </Route>
      <Route path="/home">
        <Indexs user={user} Logout={Logout}/>
      </Route>
      <Route path="/newii">
        <Newii/>
      </Route>
      <Route path="/cart">
        <Cart/>
      </Route>
    </div>
  ) 
}

export default App;
