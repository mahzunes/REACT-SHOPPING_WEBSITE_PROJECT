import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>

          </p>
          <div className="social">
            <BsFacebook className="icon"></BsFacebook>
            <RiInstagramFill className="icon"></RiInstagramFill>
            <AiFillTwitterCircle className="icon"></AiFillTwitterCircle>
            <AiFillLinkedin className="icon"></AiFillLinkedin>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
