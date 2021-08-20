import React, { useState, useEffect } from 'react'
import CategoryComponent from './CategoryComponent'
import loginImg from '../../assets/banner21.png';


function ProductByCategory() {

    const [id, setId] = useState(1);
    const [categoryName, setCategoryName] = useState("Tees for men");
    const [products, setProducts] = useState([]);

    useEffect(()=>
    {
        fetch(`http://localhost:8080/productapi/id/${id}`)
        .then(response=>response.json())
        .then(json => setProducts(json))
    }, [id]);

    return (
        <div class = "row">
            <div class="col-lg-3">
            <CategoryComponent setId={setId} setCategoryName={setCategoryName}/>
            </div>
            <div class="col-lg-8">
            <h1>{categoryName}</h1>
            {products.map(item => {
                return (
                <div class="row">
                <div class="col-sm-3">
                <div class="card" styles="width: 18rem;">
                <img class="card-img-top" alt="Card image cap" width/>
                <div class="card-body">
                <h5 class="card-title">{item.productName}</h5>
                <p class="card-text">Rs.{item.productPrize}</p>
                <a href="#" class="btn btn-primary">Add to Cart!</a>
                </div>
                </div>
                </div>
                <br/>
                </div> )
            })}
            </div>
        </div>
    )
}

export default ProductByCategory
