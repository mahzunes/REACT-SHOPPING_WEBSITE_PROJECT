import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../assets/data/data";

function SingleProduct() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const { cover, name } = product;
  return (
    <div>
      <img src={cover} alt="" />
      <h4>{name}</h4>
      <Link to="/">back to procuts</Link>
    </div>
  );
}

export default SingleProduct;
