import React from 'react';
import  Modal from '../cart/Modal.js';
import {useRef} from 'react';
import classes from './NewCategory.module.css'

function NewCategory() {

    const nameInputRef = useRef();

    const addHandler=()=>
    {
        const enteredName = nameInputRef.current.value;
        
        fetch('http://localhost:8080/categoryapi/save', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    categoryName: enteredName
                })
              }) 
    }

    return (
        <Modal>
            <form onSubmit={addHandler}>
            <div className={classes.control}>
                <label htmlFor="Category">Category name</label>
                <input type='text' id='Category' ref={nameInputRef}/>
            </div>
            <div className={classes.actions}>
            <button type="submit" className={classes.submit}>Add!</button>
            </div>
            </form>
        </Modal>
    )
}

export default NewCategory
