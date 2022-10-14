import React from 'react';
import { Outlet, Navigate } from "react-router-dom"
import {useSelector} from "react-redux"

const ProtectedRoute = () => {
    
    const {user,logged_status}= useSelector((state) => state.user)
    // useSelet

    if (logged_status) {
        return < Outlet />
    }

    return (
        <Navigate to={"/login"} />
    );
}

export default ProtectedRoute;
