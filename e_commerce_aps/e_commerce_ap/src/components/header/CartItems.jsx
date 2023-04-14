import React from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice"


function CartItems({ id, cover, name, quantity, totalPrice, price }) {

  const dispatch = useDispatch()

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }


  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id))
  }





  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="cover" />
            <button className="remove flexCenter">
              <AiOutlineClose></AiOutlineClose>
            </button>
          </div>
          <div className="details">
            <p>{name}</p>

            <label htmlFor="">Unit Price ${price}</label>
            <div className="price">
              <div className="qty flexCenter">
                <button className="plus" onClick={incCartitems}>
                  <AiOutlinePlus></AiOutlinePlus>
                </button>
                <button className="num">{quantity}</button>

                <button className="minus" onClick={descCartitems}>
                  <AiOutlineMinus></AiOutlineMinus>
                </button>
              </div>
              <div className="priceTitle">${totalPrice}</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
