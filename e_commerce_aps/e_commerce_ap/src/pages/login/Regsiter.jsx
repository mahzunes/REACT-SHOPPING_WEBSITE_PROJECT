import React, { useState } from "react";
import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUserEmail, selectUserPassword, setActiveUser, setUserLogOutState } from "../../store/userSlice"
import { createUser } from "../../firebase";

function Regsiter() {


  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const handleRegister = async e => {
    e.preventDefault();
    await createUser(username, password);
  }




  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register </h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form>
            <span>Email addres</span>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />

            <span>Password</span>

            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />

            <span>Confirm Paswsword</span>
            <input type="password" required />
            
            <button className="button" onClick={(e) => handleRegister(e)}>Register</button>
            <Link to="/login">Sign In</Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default Regsiter;
