import React from 'react'
import Modal from '../cart/Modal'
import classes from './NewCategory.module.css';
import {useRef, useState} from 'react';
import { baseURL } from '../../constants/constant';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function OrderStatus(props) {

    const [statuses, setStatuses] = useState("");

    const updateHandler = () =>
    {
    
        fetch(`${baseURL}/orderapi/update`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                orderStatus: statuses,
                orderId: props.orderid
            })
          })


    }

    return (
        <Modal>
            <form onSubmit={updateHandler}>
            <DropdownButton variant="success" id="dropdown-basic-button" title="Order Status">
  <Dropdown.Item onClick={()=>{setStatuses("In-transit")}}>In-transit</Dropdown.Item>
  <Dropdown.Item onClick={()=>{setStatuses("Delivered")}}>Delivered</Dropdown.Item>
</DropdownButton>
<br/>
<br/>
<br/>
            
            <div className={classes.actions}>
          <button type="submit" className={classes.submit}>
            Update!
          </button>
          <button onClick={()=>{props.setStatus(false)}}>Close</button>
        </div>
        </form>
        </Modal>
    )
}

export default OrderStatus
