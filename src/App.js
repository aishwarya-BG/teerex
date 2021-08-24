import React, { useState, useEffect} from "react";
import "./App.css";
import SwitchLogin from "./components/login/SwitchLogin";
import Home from "./components/ProductPage/home";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import Admin from "./components/admin/Admin";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "./stores/CartSlice";



const App = (props) => {

  const cartitems = useSelector(state => state.cart.items)
  const cart =useSelector(state => state.cart)

  let name = JSON.parse(localStorage.getItem("userinfo"));

  

  useEffect(() => {
    {cartitems.map((item) => (

      
      fetch('http://localhost:8080/cartapi/update', {
      method: 'PUT',
      headers: {
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          productId: item.id,
          userId: name.userid,
          quantity: item.quantity
      })
    })
    
    ))
  }}, [cart])


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <SwitchLogin/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
