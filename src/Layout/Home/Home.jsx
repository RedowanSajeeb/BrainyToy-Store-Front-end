// import React from 'react';


import Category from "../../Pages/CategorySection/Category";
import OurCLints from "../../Pages/OURCLIENTS/OurCLints";
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
        <OurCLints></OurCLints>
        </div>
      </div>
    );
};

export default Home;