// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    if(user){
        return children
    }
    return (
      <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoutes;