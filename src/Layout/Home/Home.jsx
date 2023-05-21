// import React from 'react';


import Category from "../../Pages/CategorySection/Category";
import Gallary from "./Gallary/Gallary";
import Slider from "./Slider";


const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <div className="max-w-fit mx-auto">
        <Gallary></Gallary>
        <Category></Category>
        </div>
      </div>
    );
};

export default Home;