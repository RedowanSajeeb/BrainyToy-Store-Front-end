// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lodding from "../Pages/Lodding";

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loding} = useContext(AuthContext)
    if (loding){
    return <Lodding></Lodding>
    }
    if(user){
        return children
    }
    return (
      <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoutes;