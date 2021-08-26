import React from "react";
import { useEffect, useState } from "react";
import { baseURL } from "../../constants/constant";
import Orderline from "./Orderline";
import OrderStatus from "./OrderStatus";

function Orders(props) {

  const [status, setStatus] = useState(false); 
  const [orderid, setOrderid] = useState(0); 
  const [view, setView] = useState(false);

  useEffect(() => {
    console.log(props.orders)
  }, [])


  const deleteHandler = (id) => {
    console.log(id);
    console.log(id);
    fetch(`${baseURL}/orderapi/order/${id}`, {
      method: "DELETE",
    });
    window.location.reload(false);
  };

  const [order, setOrder] = useState("ASC");
  const [orders, setOrders] = useState(props.orders)
  

  const sorting = (col) =>
  {
    if(order=="ASC")
    {
      const sorted = [...orders].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
      setOrders(sorted);
      setOrder("DESC");
    }
    if(order=="DESC")
    {
      const sorted = [...orders].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
      setOrders(sorted);
      setOrder("ASC");
    }
  }

  const sortingnum = (col) =>
  {
    if(order=="ASC")
    {
      const sorted = [...orders].sort((a,b)=>
      a[col] > b[col] ? 1 : -1)
      setOrders(sorted);
      setOrder("DESC");
    }
    if(order=="DESC")
    {
      const sorted = [...orders].sort((a,b)=>
      a[col] < b[col] ? 1 : -1)
      setOrders(sorted);
      setOrder("ASC");
    }
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick = {()=>{sortingnum("orderId")}} scope="col">Order Id</th>
            <th onClick = {()=>{sorting("orderStatus")}}scope="col">Order Status</th>
            <th onClick = {()=>{sortingnum("userId")}} scope="col">User Id</th>
            <th onClick = {()=>{sortingnum("totalPrice")}} scope="col">Total Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.orderId}>
              <th scope="row">{item.orderId}</th>
              <td>{item.orderStatus}</td>
              <td>{item.userId}</td>
              <td>{item.totalPrice}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>{setView(true); setOrderid(item.orderId)}}>View</button>{" "}
                |{" "}
                <button className="btn btn-success" onClick={()=>{setStatus(true); setOrderid(item.orderId)}}
                >
                  Update
                </button>{" "}
                |{" "}
                <button className="btn btn-danger"
                  onClick={() => {
                    deleteHandler(item.orderId);
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {view && <Orderline setView={setView} orderid={orderid}/>}
      {status && <OrderStatus setStatus={setStatus} orderid={orderid}/>}
    </div>
  );
}

export default Orders;
