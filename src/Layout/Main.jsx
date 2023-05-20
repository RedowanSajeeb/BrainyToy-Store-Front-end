// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sheard/Navbar";
import Footer from "../Pages/Sheard/footer";


const Main = () => {
    return (
      <div className="ms-3 me-3">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer> 
      </div>
    );
};

export default Main;