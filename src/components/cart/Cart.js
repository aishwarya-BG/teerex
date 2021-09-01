import  Modal from './Modal.js';
import React from 'react';
import classes from './Cart.module.css';
import {useSelector} from 'react-redux';
import CartItem from './CartItem.js';
import Checkout from './Checkout.js';
import {useState} from 'react';
import RadioAddress from './RadioAddress.js';

function Cart(props) {

    const [isCheckout, setIsCheckout] = useState(false);
    
    const cartItems = useSelector(state => state.cart.items);

    const cartPrice = useSelector(state=>state.cart);

    const [address, setAddress] = useState(false);

    const orderHandler=()=>
    {
        setIsCheckout(true);
    }

    const checkoutHandler=()=>
    {
        setAddress(true);
    }

    const modalActions = (
        <div className={classes.actions}>
                <button className={classes['button--alt']}onClick={props.onClose}>Close</button>
                <button className={classes.button} onClick={checkoutHandler}>Order</button>
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
                <span>Total Amount</span>
                <span>{cartPrice.totalPrice}</span>
            </div>
            {address && <RadioAddress setIsCheckout={setIsCheckout} onClose={props.onClose} isCheckout={isCheckout}/>}

            {isCheckout && <Checkout onClose={props.onClose}/>}
            {!isCheckout && !address && modalActions}
        </Modal>
    )
}

export default Cart
