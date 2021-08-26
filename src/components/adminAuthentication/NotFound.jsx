import React from "react";
import Header from "../ProductPage/Header";

const centerFlex = {
  color: "rgb(58, 84, 107)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
};

export default function NotFound() {
  return (
    <div style={centerFlex}>
      <Header />
      <h2>404 Not Found !!</h2>
    </div>
  );
}
