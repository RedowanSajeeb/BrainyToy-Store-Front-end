// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sheard/Navbar";
import Footer from "../Pages/Sheard/footer";


const Main = () => {
    return (
      <>
        <Navbar></Navbar>
        <div className="ms-3 me-3">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </>
    );
};

export default Main;