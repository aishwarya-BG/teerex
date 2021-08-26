import React from 'react'
import Modal from '../cart/Modal'
import classes from './NewCategory.module.css';
import {useRef} from 'react';
import { baseURL } from '../../constants/constant';

function OrderStatus(props) {

    const nameInputRef = useRef();

    const updateHandler = () =>
    {
    
        const enteredName = nameInputRef.current.value;
        console.log(enteredName);
        fetch(`${baseURL}/orderapi/update`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                orderStatus: enteredName,
                orderId: props.orderid
            })
          })

    }

    return (
        <Modal>
            <form onSubmit={updateHandler}>
        <div className={classes.control}>
          <label htmlFor="Product">Order Status</label>
          <input type="text" id="Product" ref={nameInputRef} />
        </div>
        
            
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
