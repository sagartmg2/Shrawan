import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {

    let navigate = useNavigate();

    let login_status = true
    

    if (login_status) {
        return < Outlet />
    }

    // return navigate("login")

    return (
        <Navigate to={"/login"} />
    );
}

export default ProtectedRoute;
