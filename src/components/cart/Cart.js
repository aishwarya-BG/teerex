import  Modal from './Modal.js';
import React from 'react';
import classes from './Cart.module.css';
import {useSelector} from 'react-redux';
import CartItem from './CartItem.js';
import Checkout from './Checkout.js';
import {useState} from 'react';

function Cart(props) {

    const [isCheckout, setIsCheckout] = useState(false);
    
    const cartItems = useSelector(state => state.cart.items);

    const cartPrice = useSelector(state=>state.cart)

    const orderHandler=()=>
    {
        setIsCheckout(true);
    }

    const modalActions = (
        <div className={classes.actions}>
                <button className={classes['button--alt']}onClick={props.onClose}>Close</button>
                <button className={classes.button} onClick={orderHandler}>Order</button>
        </div>
    )

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
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
            {isCheckout && <Checkout onClose={props.onClose}/>}
            {!isCheckout && modalActions}
        </Modal>
    )
}

export default Cart
