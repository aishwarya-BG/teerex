import React, { useState, useEffect} from "react";
import "./App.css";
import SwitchLogin from "./components/login/SwitchLogin";
import Home from "./components/ProductPage/home";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import Newii from "./components/new/Newii";
import Cart from "./components/cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "./stores/CartSlice";



const App = (props) => {

  const cartitems = useSelector(state => state.cart.items)
  const cart =useSelector(state => state.cart)

  let name = JSON.parse(localStorage.getItem("userinfo"));

  const dispatch = useDispatch();

  const fetchData=async()=>
  {
    
    
    const response = await fetch(`http://localhost:8080/cartapi/id/${name.userid}`);
    const data = await response.json();

    console.log(data);
    const cartlist = [{items:{}}, {totalQuantity:0}];

    cartlist.items =  data.map((item) =>
    {
      return{
        id : item.productId,
        price : item.productPrice,
        quantity : item.quantity,
        totalPrice: 0,
        name: item.productName
        }
    });

    cartlist.totalQuantity = data.reduce((a,v) =>  a = a + v.quantity , 0);

    dispatch(CartActions.replaceCart(cartlist))

    console.log(cartlist);
  }

  useEffect(()=>{
    if(name)
    {
    fetchData();
    }
  }, []);

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
          <Route excet path="/">
            <Home/>
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
