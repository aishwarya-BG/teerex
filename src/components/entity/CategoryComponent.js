import { result } from 'lodash';
import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Category.module.css';
import teerex from '../../assets/Capture.PNG'


function CategoryComponent()
{
    const [categorys, setCategorys] = useState([]);
    const [id, setId] = useState(1);
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);
    let history = useHistory();
    useEffect(()=>
    {
        fetch('http://localhost:8080/category/list')
        .then(res=>res.json())
        .then(
            (result) =>
            {
                setCategorys(result);
            }
        )
    }, []);
    
    useEffect(()=>
    {
        setShow(true)
        console.log(id);
        fetch(`http://localhost:8080/pdt/id/${id}`)
        .then(response=>response.json())
        .then(json => setProducts(json))
    }, [id]);


    return (
        <div className={classes.catback}>
            <h2 className={classes.h2}>Categories</h2>
            <ul className={classes.ul}>
                {categorys.map(c=>(
                    <li className={classes.li} key={c.categoryId} id={c.categoryName} onClick={() => setId(c.categoryId)}>
                        {c.categoryName}
                    </li>
                ))}
            </ul>
            <h1>{id}</h1>
            {products.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
           { /*
            <div class="products">
            <div class="product-card">
            <div class="product-image">
                <img src={teerex}/>
            </div>
            <div class="product-info">
                <h5>Winter Jacket</h5>
                <h6>$99.99</h6>
            </div>
            </div>
           </div> */}
           </div> 
    )
}

export default CategoryComponent