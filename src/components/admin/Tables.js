import React from 'react'
import classes from './Tables.module.css';
import {useState, useEffect} from 'react';
import Category from './Category';
import Product from './Product';
import { baseURL } from '../../constants/constant';
import Orders from './Orders';


function Tables(props) {

    const [category, setCategory] = useState([]);
    const [product, setProducts] = useState([]);
    const [order, setOrder] = useState([]);

    const [isCategory, setIsCategory] = useState(true);
    const [isProduct, setIsProduct] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    

    const categoryHandler = () =>
    {
        fetch(`${baseURL}/categoryapi/list`)
        .then(res=>res.json())
        .then(result => setCategory(result));
        console.log(category);
    }

    const productHandler = () =>
    {
        fetch(`${baseURL}/productapi/list`)
        .then(res=>res.json())
        .then(result => setProducts(result));
        console.log(product);
    }

    const ordersHandler = () =>
    {
        fetch(`${baseURL}/orderapi/list`)
        .then(res=>res.json())
        .then(result => setOrder(result));
        console.log(order);
    }

    useEffect(() => {
        categoryHandler();
        productHandler();
        ordersHandler();
    }, [])

    return (
        <div>
        <div className = "row">
        <div className="col-lg-3">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ul className="list-group">
            <li  className={`${classes.tab} ${isCategory ? classes.active : ''}`} onClick={()=>{setIsCategory(true); setIsOrder(false); setIsProduct(false);}}>Category</li>
            <li  className = {`${classes.tab} ${isProduct ? classes.active : ''}`} onClick={()=>{setIsProduct(true); setIsCategory(false); setIsOrder(false);}}>Products</li>
            <li className = {`${classes.tab} ${isOrder ? classes.active : ''}`} onClick={()=>{setIsOrder(true); setIsProduct(false); setIsCategory(false);}}>Orders</li>
        </ul>
        </div >
        <div  className="col-lg-7">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {isCategory && <Category category={category} setIsCategory={setIsCategory}/>}
            {isProduct && <Product product={product}/>}
            {isOrder && <Orders orders={order}/>}
        </div>
        </div>
        </div>
    )
}

export default Tables
