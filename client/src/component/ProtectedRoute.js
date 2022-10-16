import React from 'react';
import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = () => {

    console.log("protected - route ")

    const { user } = useSelector((state) => state.user)

    /* 

        FALSY VALUES
            false 
            0
            NaN  
            ""
            null
            undefined

    */
    // if ({}) {

    // }

    if (user) {
        return < Outlet />
    }

    return (
        <Navigate to={"/login"} />
    );
}

export default ProtectedRoute;
