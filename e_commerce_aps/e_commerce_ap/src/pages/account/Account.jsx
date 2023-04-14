import React, { useState } from "react";
import image from "../../assets/images/input.png";
import "./account.css";
import { useDispatch } from "react-redux";
import { updateActions } from "../../store/updateSlice";
import { getAuth, updateProfile } from "firebase/auth";
function Account() {
  const auth = getAuth();
  const dispatch = useDispatch()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const updateUser = async e => {
    e.preventDefault();
    await updateProfile(auth.currentUser, {
      email: { email }, password: { password }
    }).then(() => {
      console.log(auth.currentUser)
    }).catch((error) => {
      error.message();
    });
  }






  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" src={image} alt="imgs" />
                <img src={image} alt="" className="image-preview" />
              </div>
            </div>
            <div className="right">
              <label>Email</label>
              <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />

              <label>Email Repeat </label>
              <input type="text" required />

              <label>Password</label>
              <input type="text" required value={password} onChange={(e) => setPassword(e.target.value)} />

              <button className="button" onClick={(e) => updateUser(e)}>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
