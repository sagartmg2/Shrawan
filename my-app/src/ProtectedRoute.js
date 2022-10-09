import React, { useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {

    let navigate = useNavigate();

    // let login_status = false
    // const [login_status, setstate] = useState(true);

    console.log("render- proteced route");
    console.log("login_status", props.login_status);

    if (props.login_status) {
        return < Outlet />
    }

    // return navigate("login")

    return (
        <Navigate to={"/login"} />
    );
}

export default ProtectedRoute;
