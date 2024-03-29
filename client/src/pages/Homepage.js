import React from "react";
import { Link} from 'react-router-dom';
import Cart from '../components/Cart';
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
    <div className="container">
      <div className='flex-container '> 
          <div className='intro m-5'>
         <h1 className='title'>Select@Collect is your local family shopping center</h1>

          <p>Welcome to Select@Collect - one of the most family friendly and cheapest places on earth. Our market offers many of your favorite daily needs products including clothes, foods, apliances, devices, books, and more with twist. What’s the twist? Lots of joy with some useful and quality items. We believe that quality makes joyful buyers. It also helped us to grow to be the biggest retail chains in the market. So share this with your family and your friends - There is nothing like shopping  with joyfulness with the ones you love.</p><br>
          </br>
         <Link to="/home" ><button className="start-btn">Start Order</button>
         </Link>
        </div>
            <div className='home-hero'>
            <img src='https://cdn.imgbin.com/10/24/20/imgbin-shopping-bag-drawing-illustration-an-umbrella-man-woman-holding-paper-bag-and-umbrella-ZK535jcqPUUQmwTxjYRUUdWBi.jpg' alt='meme'/>
            </div>
        </div>
        <Cart />
    </div>
    <Footer/>
    </>
  );
};

export default Homepage;
