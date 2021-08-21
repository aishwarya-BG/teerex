import  Modal from './Modal.js';
import React from 'react';
import classes from './Cart.module.css';

function Cart(props) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                <li>qwertyu</li>
                <li>hsavkasygha</li>
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>1000</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
