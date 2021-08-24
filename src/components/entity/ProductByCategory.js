import React, { useState, useEffect } from "react";
import CategoryComponent from "./CategoryComponent";
import loginImg from "../../assets/banner21.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartActions } from "../../stores/CartSlice";
import { baseURL } from "../../constants/constant";

function ProductByCategory() {
  const [id, setId] = useState(1);
  const [categoryName, setCategoryName] = useState("Tees for men");
  const [products, setProducts] = useState([]);
  const [cartData, setCartdata] = useState([]);
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();

  const history = useHistory();

  let user = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    fetch(`${baseURL}/productapi/id/${id}`)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [id]);

  const cartHandler = async (pId, price, name) => {
    if (user) {
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userId: user.userid,
          productId: pId,
        }),
      };

      const response = await fetch(
        `${baseURL}/cartapi/check`,
        request
      );
      const json = await response.json();

      console.log(Object.keys(json).length);
      console.log(user.userid);
      console.log(pId);

      if (Object.keys(json).length == 0) {
        const requestbody = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            userId: user.userid,
            productId: pId,
            quantity: 1,
            productPrice: price,
            productName: name,
          }),
        };
        fetch(`${baseURL}/cartapi/save`, requestbody)
          .then((res) => res.json())
          .then((result) => setCartdata(result));

        dispatch(CartActions.addItem({ id: pId, price: price, name: name }));
      }
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-3">
        <CategoryComponent setId={setId} setCategoryName={setCategoryName} />
      </div>
      <div className="col-lg-8">
        {/*<h1>{categoryName}</h1>*/}
        <br />
        <div className="row">
          {products.map((item) => {
            return (
              <div key={item.productId} className="col-sm-3">
                <div className="card" styles="width: 15rem;">
                  <img
                    className="card-img-top"
                    src={item.productImg}
                    alt="Card image cap"
                    width="50px"
                    height="50px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.productName}</h5>
                    <p className="card-text">Rs.{item.productPrize}</p>
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        cartHandler(
                          item.productId,
                          item.productPrize,
                          item.productName
                        )
                      }
                    >
                      Add to Cart!
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductByCategory;
