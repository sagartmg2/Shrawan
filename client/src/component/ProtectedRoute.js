import React from 'react';
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {
    let login_status = false

    if (login_status) {
        return < Outlet />
    }

    return (
        <Navigate to={"/login"} />
    );
}

export default ProtectedRoute;
