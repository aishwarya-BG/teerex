import React from "react";
import Modal from "../cart/Modal";
import { useEffect, useState } from "react";
import { baseURL } from "../../constants/constant";
import classes from './Order.module.css'

function Order(props) {
  let name = JSON.parse(localStorage.getItem("userinfo"));
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/orderapi/byuser/${name.userid}`)
      .then((res) => res.json())
      .then((result) => setOrder(result));
  }, []);

  const cancelHandler = (id) => {
    console.log(id);
    fetch(`${baseURL}/orderapi/order/${id}`, {
      method: "DELETE",
    });
    window.location.reload(false);
  };

  return (
    <Modal>
      <div>
        <h4 className={classes.h4}>TeeRex Orders for you!</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Order No</th>
              <th scope="col">Order Status</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item.orderId}>
                <th scope="row">{item.orderId}</th>
                <td>{item.orderStatus}</td>
                <td>{item.totalPrice}</td>
                <td>
                  <button className="btn btn-primary">View</button>{" "}
                  {item.orderStatus === "Placed" && (
                    <button className="btn btn-danger"
                      onClick={() => {
                        cancelHandler(item.orderId);
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={classes.actions}>
      <button className = {classes.button} onClick={props.onClose}>Close</button>
      </div>
    </Modal>
  );
}

export default Order;
