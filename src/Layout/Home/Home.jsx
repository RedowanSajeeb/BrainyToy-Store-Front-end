// import React from 'react';


import Category from "../../Pages/CategorySection/Category";
import WHATdo from "../../Pages/WHAtdo/WHATdo";
import Gallary from "./Gallary/Gallary";
import Slider from "./Slider";


const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <div className="max-w-fit mx-auto">
        <WHATdo></WHATdo>
        <Gallary></Gallary>
        <Category></Category>
        </div>
      </div>
    );
};

export default Home;