import React, { useState, useEffect } from 'react'
import CategoryComponent from './CategoryComponent'
import loginImg from '../../assets/banner21.png';
import { useHistory } from 'react-router-dom';


function ProductByCategory() {

    const [id, setId] = useState(1);
    const [categoryName, setCategoryName] = useState("Tees for men");
    const [products, setProducts] = useState([]);
    const [cartData, setCartdata] = useState([]);

    const history = useHistory();

    let user = JSON.parse(localStorage.getItem("userinfo"));

    useEffect(()=>
    {
        fetch(`http://localhost:8080/productapi/id/${id}`)
        .then(response=>response.json())
        .then(json => setProducts(json))
    }, [id]);

    const cartHandler = (pId, price) =>
    {
        console.log(pId);

        
        
        if(user)
        {
        const requestbody = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                userId: user.userid,
                productId: pId,
                quantity: 1,
                productPrice: price
            })
        }
            fetch('http://localhost:8080/cartapi/save', requestbody)
            .then(res=>res.json())
            .then(result => setCartdata(result))
        }
        else
        {
            history.push("/login");
        }
    }
    
    return (
        <div class = "row">
            <div class="col-lg-3">
            <CategoryComponent setId={setId} setCategoryName={setCategoryName}/>
            </div>
            <div class="col-lg-8">
            {/*<h1>{categoryName}</h1>*/}
            <br/>
            <div class="row">
            {products.map(item => {
                return (
                <div class="col-sm-3">
                <div class="card" styles="width: 15rem;">
                <img class="card-img-top" src={item.productImg} alt="Card image cap" width="50px" height="50px"/>
                <div class="card-body">
                <h5 class="card-title">{item.productName}</h5>
                <p class="card-text">Rs.{item.productPrize}</p>
                <button class="btn btn-success" onClick={()=>cartHandler(item.productId, item.productPrize)}>Add to Cart!</button>
                </div>
                </div>
                </div>

                 )
            }
            )}
            </div>
            </div>
        </div>
    )
}

export default ProductByCategory
