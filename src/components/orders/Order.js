import React from "react";
import Modal from "../cart/Modal";
import { useEffect, useState } from "react";
import { baseURL } from "../../constants/constant";

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
        <h4>My Orders</h4>
        <table className="table">
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
                  {item.orderStatus === "Placed" && (
                    <button
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
      <button onClick={props.onClose}>Close</button>
    </Modal>
  );
}

export default Order;
