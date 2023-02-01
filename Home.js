import React from "react";
import "./Home.css"
import video from "./images/videob.mp4";

import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homepg">
            <video src={video} autoPlay muted loop class="video-bg" />
         <div className="home-text">
            <h2>Bye bye, long waits and cold food..!</h2>
            <p>Order now and get it delivered in a flash </p>
            <div className="home-btn">
             
            <Link to="/LogIn">Start Exploring</Link> 
            
            </div>
         </div>
        </div>

    )
};
  
  export default Home;
      