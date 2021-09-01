import React, { useState } from "react";
import CategoryComponent from "../entity/CategoryComponent";
import bannerimg from "../../assets/SPECIAL.png";
import ProductByCategory from "../entity/ProductByCategory";
import classes from "./home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "../../stores/CartSlice";
import Header from "./Header";
import Cart from "../cart/Cart";
import { useEffect } from "react";
import Order from "../orders/Order";
import { baseURL } from "../../constants/constant";
import { ProductActions } from "../../stores/ProductSlice";

function Home(props) {
  const [showcart, setShowcart] = useState(false);
  const [showorder, setShoworder] = useState(false);

  const dispatch = useDispatch();

  let name = JSON.parse(localStorage.getItem("userinfo"));

  const fetchData = async () => {
    const response = await fetch(`${baseURL}/cartapi/id/${name.userid}`);
    const data = await response.json();

    console.log(data);
    const cartlist = [{ items: {} }, { totalQuantity: 0 }, { totalPrice: 0 }];

    cartlist.items = data.map((item) => {
      return {
        id: item.productId,
        price: item.productPrice,
        quantity: item.quantity,
        totalPrice: 0,
        name: item.productName,
      };
    });

    cartlist.totalQuantity = data.reduce((a, v) => (a = a + v.quantity), 0);

    cartlist.totalPrice = data.reduce((a, v) => {
      console.log({ v });
      a = a + v.quantity * v.productPrice;
      console.log({ a });
      return a;
    }, 0);

    dispatch(CartActions.replaceCart(cartlist));

    console.log(cartlist);
  };

    const fetchProducts = async() => {
      const response = await fetch(`${baseURL}/productapi/list`);
      const data = await response.json();

      const productItems = [{items:{}}];

      productItems.items = data.map((item)=>{
        return {
          id: item.productId,
          name: item.productName
        }
      })

      dispatch(ProductActions.replaceProduct(productItems));

      console.log(productItems)
    }

  useEffect(() => {
    if (name) {
      fetchData();
    }
    fetchProducts();
  }, []);

  const showcartHandler = () => {
    setShowcart(true);
  };

  const hidecartHandler = () => {
    setShowcart(false);
  };

  const showorderHandler = () => {
    setShoworder(true);
  };

  const hideorderHandler = () => {
    setShoworder(false);
  };

  return (
    <div className={classes.all}>
      {showcart && <Cart onClose={hidecartHandler} />}
      {showorder && <Order onClose={hideorderHandler} />}
      <Header onShowcart={showcartHandler} onShowOrders={showorderHandler} />
      <h2>Welcome</h2>
      <div className={classes["main-image"]}>
        <img src={bannerimg} />
      </div>
      <ProductByCategory />
    </div>
  );
}

export default Home;
