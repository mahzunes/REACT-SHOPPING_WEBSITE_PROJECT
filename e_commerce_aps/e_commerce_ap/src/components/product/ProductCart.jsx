import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { wishActions } from "../../store/wishSlice";

function ProductCart({ key, id, cover, name, price }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };

  const addWish = () => {
    dispatch(wishActions.addToWish({ id, name, price, cover }));
  };
         
  return (
    <>
      <div className="box boxItems" id="product">
        <div className="img">
          <a href="/">     
            <img src={cover} alt="cover" />
          </a>
        </div>
        <div className="details">
          <h3>${price} </h3>
          <p>{name}</p>
          <button onClick={addToCart}>
            <AiOutlinePlusCircle></AiOutlinePlusCircle>
          </button>
          <button onClick={addWish}>
            <AiFillStar></AiFillStar>
          </button>
          <Link to={`${id}`}>more info</Link>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
