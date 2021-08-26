import React from "react";
import { useState } from "react";
import NewProduct from "./NewProduct";
import { baseURL } from "../../constants/constant";
import UpdateProduct from "./UpdateProduct";

function Product(props) {
  const [newProduct, setNewProduct] = useState(false);
  const [product, setProduct] = useState(props.product);
  const [order, setOrder] = useState("ASC");
  const [update, setUpdate] = useState(false);
  const [productId, setProductId] = useState(0);
  

  const sorting = (col) =>
  {
    if(order=="ASC")
    {
      const sorted = [...product].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
      setProduct(sorted);
      setOrder("DESC");
    }
    if(order=="DESC")
    {
      const sorted = [...product].sort((a,b)=>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
      setProduct(sorted);
      setOrder("ASC");
    }
  }

  const sortingnum = (col) =>
  {
    if(order=="ASC")
    {
      const sorted = [...product].sort((a,b)=>
      a[col] > b[col] ? 1 : -1)
      setProduct(sorted);
      setOrder("DESC");
    }
    if(order=="DESC")
    {
      const sorted = [...product].sort((a,b)=>
      a[col] < b[col] ? 1 : -1)
      setProduct(sorted);
      setOrder("ASC");
    }
  }

  const deleteHandler = (id) =>
  {
    fetch(`${baseURL}/productapi/products/${id}`, {
      method: "DELETE",
    });
    window.location.reload(false);
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th onClick = {()=>{sortingnum("productId")}} scope="col">Product ID</th>
            <th onClick = {()=>{sorting("productName")}} scope="col">List</th>
            <th onClick = {()=>{sorting("productSize")}} scope="col">Size</th>
            <th onClick = {()=>{sortingnum("productStock")}} scope="col">Stock</th>
            <th onClick = {()=>{sorting("productColour")}} scope="col">Colour</th>
            <th onClick = {()=>{sortingnum("productPrize")}} scope="col">Price</th>
            <th onClick = {()=>{sortingnum("categoryId")}} scope="col">Category id</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.productId}>
              <th scope="row">{item.productId}</th>
              <th scope="row">{item.productName}</th>
              <td>{item.productSize}</td>
              <td>{item.productStock}</td>
              <td>{item.productColour}</td>
              <td>{item.productPrize}</td>
              <td>{item.categoryId}</td>
              <td><button className="btn btn-success" onClick={()=>{setUpdate(true); setProductId(item.productId)}}>Update</button>{" "}
                |{" "}<button className="btn btn-danger" onClick={()=>{deleteHandler(item.productId)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-success btn-lg"
        onClick={() => {
          setNewProduct(true);
        }}
      >
        Add Product
      </button>
      <br/>
      <br/>
      {newProduct && <NewProduct setNewProduct={setNewProduct}/>}
      {update && <UpdateProduct productId={productId} setUpdate={setUpdate}/>}
    </div>
  );
}

export default Product;
