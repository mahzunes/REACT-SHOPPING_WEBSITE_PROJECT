import React, { useState } from "react";
import back from "../../assets/images/my-account.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { login } from "../../firebase";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    navigate("/");
  };

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Login </h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form>
            <span>Username or Email addres</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <span>Paswsword</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="button" onClick={(e) => handleSubmit(e)}>
              Login
            </button>
            <Link to="/register">Sign Up</Link>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
