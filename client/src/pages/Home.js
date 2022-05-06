// import React, { useState } from "react";
import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Home = () => {
  return (
    <div className="container">
      <div className='flex-container '> 
          <div className='intro m-5'>
         <h1 className='title'>Sell@Shop is your local family shopping center</h1>

          <p>Welcome to Sell@Shop - one of the most family friendly and cheapest places on earth. Our market offers many of your favorite daily needs products including clothes, foods, apliances, devices, books, and more with twist. What’s the twist? Lots of joy with some useful and quality items. We believe that quality makes joyful buyers. It also helped us to grow to be the biggest retail chains in the market. So share this with your family and your friends - There is nothing like shopping  with joyfulness with the ones you love.</p>
        </div>
            <div className='home-hero'>
            <img src='https://cdn.imgbin.com/10/24/20/imgbin-shopping-bag-drawing-illustration-an-umbrella-man-woman-holding-paper-bag-and-umbrella-ZK535jcqPUUQmwTxjYRUUdWBi.jpg' alt='meme'/>
            </div>
        </div>
        <CategoryMenu />
      <ProductList />
      <Cart />
      
    </div>
  );
};

export default Home;
