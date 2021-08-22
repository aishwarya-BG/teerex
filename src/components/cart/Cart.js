import  Modal from './Modal.js';
import React from 'react';
import classes from './Cart.module.css';
import {useSelector} from 'react-redux';
import CartItem from './CartItem.js';

function Cart(props) {
    
    const cartItems = useSelector(state => state.cart.items);

    const cartPrice = useSelector(state=>state.cart)

    return (
        <Modal onClose={props.onClose}>
            <ul>
                {cartItems.map((item) =>(
                    <CartItem 
                        key = {item.id}
                        item={{
                        id: item.id,
                        name:item.name,
                        quantity:item.quantity,
                        total:item.totalPrice,
                        price:item.price
                        }}
                    />
                ))} 
            </ul>
            <div className={classes.total}>
                <span>&nbsp; &nbsp; Total Amount</span>
                <span>{cartPrice.totalPrice}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
