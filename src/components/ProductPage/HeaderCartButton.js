import React, {useSelector} from 'react-redux';
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';
import {useState, useEffect} from 'react';

function HeaderCartButton(props) {

    const numberofitems = useSelector(state => state.cart.totalQuantity);
    const cartitems = useSelector(state => state.cart);
    const [btnHighlight, setBtnHighlight] = useState(false);

    const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ''}`;

    useEffect(() => {

        setBtnHighlight(true);
        
    }, [cartitems])

    return (
        <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofitems}</span>
        </button>
    )
}

export default HeaderCartButton
