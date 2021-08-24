import React from "react";
import classes from "./Checkout.module.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Checkout(props) {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    address: true,
    city: true,
    state: true,
    pincode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const stateInputRef = useRef();
  const cityInputRef = useRef();
  const pincodeInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const isNotSixChars = (value) => value.trim().length !== 6;

  const cartPrice = useSelector((state) => state.cart);

  const cartitems = useSelector((state) => state.cart.items);

  let user = JSON.parse(localStorage.getItem("userinfo"));

  const [orderid, setOrderId] = useState(0);

  const [enteredData, setEnteredData] = useState({});

  const cartlist = [{ items: {} }, { totalQuantity: 0 }, { totalPrice: 0 }];


  {/*useEffect(() => {
    fetch("http://localhost:8080/shippingapi/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: user.userid,
        address: enteredData.address,
        city: enteredData.city,
        state: enteredData.state,
        pincode: enteredData.pincode,
        orderid: orderid,
        totalamt: cartPrice.totalPrice,
      }),
    });
  }, [orderid, enteredData]);*/}

  const ConfirmHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredPincode = pincodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStateIsValid = !isEmpty(enteredState);
    const enteredPincodeIsValid = !isNotSixChars(enteredPincode);

    setFormInputValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      state: enteredStateIsValid,
      pincode: enteredPincodeIsValid,
    });

    const formIsValid =
      enteredPincodeIsValid &&
      enteredStateIsValid &&
      enteredCityIsValid &&
      enteredAddressIsValid &&
      enteredNameIsValid;

    console.log("Gsdag");
    if (!formIsValid) {
      return;
    }

    console.log(cartPrice.totalPrice);

    const response = await fetch("http://localhost:8080/orderapi/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderStatus: "Placed",
        userId: user.userid,
        totalPrice: cartPrice.totalPrice,
      }),
    });

    const json = await response.json();
    console.log(json.orderId);

    cartitems.map((item) =>
    fetch("http://localhost:8080/orderlineapi/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: json.orderId,
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
        orderLineItemStatus: "Placed",
      }),
    }))

    fetch("http://localhost:8080/shippingapi/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: user.userid,
        address: enteredAddress,
        city: enteredCity,
        state: enteredState,
        pincode: enteredPincode,
        orderId: json.orderId,
        totalmt: cartPrice.totalPrice,
      }),
    });
    console.log("gvdfsja");

    cartitems.map((item) =>
    fetch("http://localhost:8080/cartapi/remove", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: item.id,
        userId: JSON.parse(localStorage.getItem("userinfo")).userid
      }),
    }))

    window.location.reload(false);


  };

  return (
    <form onSubmit={ConfirmHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter valid name!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.address ? "" : classes.invalid
        }`}
      >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputValidity.address && <p>Please enter valid address!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter valid city!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.state ? "" : classes.invalid
        }`}
      >
        <label htmlFor="state">State</label>
        <input type="text" id="state" ref={stateInputRef} />
        {!formInputValidity.state && <p>Please enter valid state!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputValidity.pincode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" ref={pincodeInputRef} />
        {!formInputValidity.pincode && <p>Please enter valid pincode!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={classes.submit} type="submit">
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
