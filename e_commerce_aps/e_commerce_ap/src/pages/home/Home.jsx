import React from "react";
import Category from "../../components/category/Category";
import { Order } from "../../components/hero/Order";
import { Slider } from "../../components/hero/Slider";
import Product from "../../components/product/Product";

function Home() {
  return (
    <>
      <Slider></Slider>
      <Order></Order>
      <Category></Category>
      <Product></Product>
    </>
  );
}

export default Home;
