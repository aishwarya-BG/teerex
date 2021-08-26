import Modal from "../cart/Modal";
import React from "react";
import classes from "./NewCategory.module.css";
import { useState, useEffect } from "react";
import { baseURL } from "../../constants/constant";

function Orderline(props) {

    const [orderline, setOrderline] = useState([]);
    const [shipping, setShipping] = useState([]);

    useEffect(() => {
        fetch(`${baseURL}/orderlineapi/byorderid/${props.orderid}`)
        .then(res=>res.json())
        .then(result => setOrderline(result));

        fetch(`${baseURL}/shippingapi/byorderid/${props.orderid}`)
        .then(res=>res.json())
        .then(result => setShipping(result));


    }, [])
  return (
    <Modal>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Orderline ID</th>
            <th  scope="col">Product ID</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {orderline.map((item) => (
            <tr key={item.productId}>
              <th scope="row">{item.orderLineItemId}</th>
              <th scope="row">{item.productId}</th>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table table-striped">
      <thead>
          <tr>
            <th scope="col">Address</th>
            <th  scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Pincode</th>
          </tr>
        </thead>
        <tbody>
          {shipping.map((item) => (
            <tr key={item.shippingid}>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className={classes.actions}>
        <button
          className={classes.button}
          onClick={() => {
            props.setView(false);
          }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default Orderline;
