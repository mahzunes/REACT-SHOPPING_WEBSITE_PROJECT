import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Medicine from "../../assets/images/Medicine.svg";
import "./header.css";
import Card from "./Card";
import User from "./User";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiLogIn } from "react-icons/bi";

function Home() {
  const user = useSelector((state) => state.user.user);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  if (!user) {
    return (
      <div>
        <header className="header">
          <div className="scontainer flex">
            <div className="logo">
              <Link to="/">
                {" "}
                <img src={Medicine} alt="Medicine" />
              </Link>
            </div>
            <div className="search flex">
              <AiOutlineSearch className="searchIcon"></AiOutlineSearch>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="account flexCenter">
              <Card></Card>
              <Link to={"/login"} className="loginLink">
                <BiLogIn className="biLogin"></BiLogIn>
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }

  return (
    user && (
      <>
        <header className="header">
          <div className="scontainer flex">
            <div className="logo">
              <Link to="/">
                {" "}
                <img src={Medicine} alt="Medicine" />
              </Link>
            </div>
            <div className="search flex">
              <AiOutlineSearch className="searchIcon"></AiOutlineSearch>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="account flexCenter">
              <Card></Card>
              <User></User>
            </div>
          </div>
        </header>
      </>
    )
  );
}

export default Home;
