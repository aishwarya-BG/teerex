import React, { useState, useEffect } from 'react'
import CategoryComponent from './CategoryComponent'


function ProductByCategory() {

    const [id, setId] = useState(1);
    const [products, setProducts] = useState([]);

    useEffect(()=>
    {
        fetch(`http://localhost:8080/productapi/id/${id}`)
        .then(response=>response.json())
        .then(json => setProducts(json))
    }, [id]);

    return (
        <div>
            <CategoryComponent setId={setId}/>
            <h1>{id}</h1>
            {products.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}

        </div>
    )
}

export default ProductByCategory
