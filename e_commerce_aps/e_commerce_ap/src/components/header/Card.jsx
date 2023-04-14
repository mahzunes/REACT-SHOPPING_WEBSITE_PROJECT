import React from "react";
import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { product } from "../../assets/data/data";
import CartItems from "../header/CartItems";
import { useSelector } from "react-redux";

function Card() {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };

  const cartItems = useSelector((state) => state.cart.itemsList);
  const quantity = useSelector((state) => state.cart.totalQuantity);

  //total
  let total = 0;
  const itemLists = useSelector((state) => state.cart.itemsList);
  itemLists.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon"></BiShoppingBag>
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping Cart</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon"></AiOutlineClose>
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          ></CartItems>
        ))}
        <div className="checkOut">
          <button>
            <span>Priceed To Checkout </span>
            <label htmlFor="">${total}</label>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
