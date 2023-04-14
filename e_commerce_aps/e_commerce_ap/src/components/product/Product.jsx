import React from "react";
import "./product.css";
import { product } from "../../assets/data/data";
import ProductCart from "./ProductCart";

function Product() {
  return (
    <>
      <section className="product">
        <div className="container grid3">
          {product.map((item, key) => (
            <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} ></ProductCart>
          ))} 
        </div>
      </section>
    </>
  );
}

export default Product;
