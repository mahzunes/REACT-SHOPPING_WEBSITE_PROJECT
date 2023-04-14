import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./pages/login/Regsiter";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { useSelector } from "react-redux";
import WishList from "./pages/wishlist/WishList";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
        <Route path="/wishlist" element={<WishList></WishList>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
