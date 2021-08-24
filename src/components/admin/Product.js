import React from "react";
import { useState } from "react";
import NewProduct from "./NewProduct";

function Product(props) {
  const [newProduct, setNewProduct] = useState(false);

  return (
    <div>
      <h1>Product</h1>
      <table>
        <thead>
          <tr>
            <td>List</td>
            <td>Size</td>
            <td>Stock</td>
            <td>Colour</td>
            <td>Price</td>
            <td>Category id</td>
          </tr>
        </thead>
        <tbody>
          {props.product.map((item) => (
            <tr key={item.productId}>
              <td>{item.productName}</td>
              <td>{item.productSize}</td>
              <td>{item.productStock}</td>
              <td>{item.productColour}</td>
              <td>{item.productPrize}</td>
              <td>{item.categoryId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          setNewProduct(true);
        }}
      >
        Add Category
      </button>
      {newProduct && <NewProduct/>}
    </div>
  );
}

export default Product;
