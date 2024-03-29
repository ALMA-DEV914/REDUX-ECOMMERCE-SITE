// import React, { useState } from "react";
import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <div className="container">
        <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
    <Footer/>
    </>
  );
};

export default Home;
