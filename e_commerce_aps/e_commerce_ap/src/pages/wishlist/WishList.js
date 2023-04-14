import React from "react";
import { useSelector } from "react-redux";
import "./wish.css";
import { Link } from "react-router-dom";
import { IoIosRemoveCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { wishActions } from "../../store/wishSlice";

function WishList() {
  const dispatch = useDispatch();

  const removeCartWish = (id) => {
    dispatch(wishActions.removeFromCart(id));
  };

  const user = useSelector((state) => state.user.user);
  const wishList = useSelector((state) => state.wish.itemsList);

  if (!user) {
    return (
      <div>
        <h3>Lütfen giriş yapınız</h3>
        <Link to={"/login"}>Giriş sayfasına gitmek için tıklayınız...</Link>
      </div>
    );
  }

  return (
    user && (
      <>
        {wishList.map((item) => (
          <div className="box boxItems">
            <div className="img">
              <a href="/">
                <img src={item.cover} alt="cover" />
              </a>
              <div className="details">
                <h3>${item.price}</h3>
                <p>{item.name}</p>
                <button>
                  <IoIosRemoveCircle
                    onClick={() => removeCartWish(item.id)}
                  ></IoIosRemoveCircle>
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  );
}

export default WishList;
