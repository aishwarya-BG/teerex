import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../stores/CartSlice';


const CartItem = (props) => {

  const dispatch = useDispatch();

  const {name, quantity, total, price, id} = props.item;



  const addItemHandler = () =>
  {
    dispatch(CartActions.addItem({id, price, name}))
    console.log(localStorage.getItem("userinfo".userid))
  }

  const removeItemHandler = () =>
  {
    console.log(quantity);
    if(quantity===1)
    {
      fetch('http://localhost:8080/cartapi/remove', {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            productId: id,
            userId: JSON.parse(localStorage.getItem("userinfo")).userid
        })
        })
    }
    
    dispatch(CartActions.removeItem({id, price}))
  }


  return (

    <li className={classes['cart-item']}>
      <div>
        <h5>{name}</h5>
        <div className={classes.summary}>
          <span className={classes.price}>Rs. {price}</span>
          <span className={classes.amount}>x {quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler}>−</button>
        <button onClick={addItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
