import React from 'react'
import Modal from '../cart/Modal';
import classes from './NewCategory.module.css';
import {useRef} from 'react';
import { baseURL } from '../../constants/constant';

function UpdateProduct(props) {
    const nameInputRef = useRef();
  const imageInputRef = useRef();
  const sizeInputRef = useRef();
  const stockInputRef = useRef();
  const colourInputRef = useRef();
  const priceInputRef = useRef();
  const catidInputRef = useRef();

  const updateHandler = () => {
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredSize = sizeInputRef.current.value;
    const enteredStock = stockInputRef.current.value;
    const enteredColour = colourInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredCatid = catidInputRef.current.value;

    fetch(`${baseURL}/productapi/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: props.productId,
        productName: enteredName,
        productImg: enteredImage,
        productSize: enteredSize,
        productStock: enteredStock,
        productColour: enteredColour,
        productPrize: enteredPrice,
        categoryId: enteredCatid,
      }),
    });
  };

  return (
    <Modal>
      <form onSubmit={updateHandler}>
        <div className={classes.control}>
          <label htmlFor="Product">Product name</label>
          <input type="text" id="Product" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Image">Image(url)</label>
          <input type="text" id="Image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Size">Size</label>
          <input type="text" id="Size" ref={sizeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Stock">Stock</label>
          <input type="text" id="Stock" ref={stockInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Colour">Colour</label>
          <input type="text" id="Colour" ref={colourInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Price">Price</label>
          <input type="text" id="Price" ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Categoryid">Category ID</label>
          <input type="text" id="Categoryid" ref={catidInputRef} />
        </div>
        <div className={classes.actions}>
        <button className={classes.button} onClick={()=>{props.setUpdate(false)}}>Cancel</button>
          <button type="submit" className={classes.submit}>
            Update!
          </button>
        </div>
      </form>
      </Modal>)
}

export default UpdateProduct
