import React from 'react'
import classes from './Tables.module.css';
import {useState, useEffect} from 'react';
import Category from './Category';
import Product from './Product';
import { baseURL } from '../../constants/constant';


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
        <div className="col-lg-3">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ul className="list-group">
            <li  className = {classes.li} onClick={()=>{setIsCategory(true); setIsOrder(false); setIsProduct(false);}}>Category</li>
            <li  className = {classes.li} onClick={()=>{setIsProduct(true); setIsCategory(false); setIsOrder(false);}}>Products</li>
            <li className = {classes.li} onClick={()=>{setIsOrder(true); setIsProduct(false); setIsCategory(false);}}>Orders</li>
        </ul>
        </div >
        <div  className="col-lg-4">
            {isCategory && <Category category={category}/>}
            {isProduct && <Product product={product}/>}
            {isOrder && <h1>Order</h1>}
        </div>
        </div>
    )
}

export default Tables
