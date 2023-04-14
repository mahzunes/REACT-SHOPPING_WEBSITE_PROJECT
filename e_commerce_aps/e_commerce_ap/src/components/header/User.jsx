import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GrHelp } from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { logout } from "../../firebase.js";
import { useSelector } from "react-redux";


function User() {
  const updateUser = useSelector((state) => state.update.update);
  const users = useSelector((state) => state.user.user);
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(null);
  };

  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  <Link to="/account">
                    <div className="img">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                        alt=""
                      />
                    </div>
                  </Link>

                  <div className="text">
                    <h4>{users.email}</h4>
                    <label htmlFor="">
                      {users.emailVerified ? (
                        <span>E-posta doğrulandı</span>
                      ) : (
                        <span>E-posta doğrulanmadı</span>
                      )}
                    </label>
                  </div>
                </div>

                <Link to="/login">
                  <button className="box">
                    <FiSettings className="icon"></FiSettings>
                    <h4>My Account</h4>
                  </button>
                </Link>

                <button className="box">
                  <BsFillCalendarCheckFill className="icon"></BsFillCalendarCheckFill>
                  <h4>My Order</h4>
                </button>

                <button className="box">
                  <AiFillHeart className="icon"></AiFillHeart>
                  <Link to={"/wishlist"}>
                    <h4>Wishlist</h4>
                  </Link>
                </button>

                <button className="box">
                  <GrHelp className="icon"></GrHelp>
                  <h4>Help</h4>
                </button>

                <button className="box">
                  <BiLogOut className="icon"></BiLogOut>
                  <Link to={"/login"}>
                    <button onClick={logout}>
                      <h4>Logout</h4>
                    </button>
                  </Link>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  );
  console.log(users);
}

export default User;
