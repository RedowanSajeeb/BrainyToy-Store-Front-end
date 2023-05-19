// import React from 'react';


import Gallary from "./Gallary/Gallary";
import Slider from "./Slider";


const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <div className="max-w-fit mx-auto">
          <Gallary></Gallary>
        </div>
      </div>
    );
};

export default Home;