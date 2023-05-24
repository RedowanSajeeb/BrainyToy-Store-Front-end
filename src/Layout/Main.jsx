// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sheard/Navbar";
import Footer from "../Pages/Sheard/Footer";



const Main = () => {
    return (
      <div className="body-font">
        <Navbar></Navbar>
        <div className="ms-3 me-3">
          <Outlet></Outlet>
        </div>
         <Footer></Footer>
      </div>
    );
};

export default Main;