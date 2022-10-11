import React, { useContext, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { UserContext } from './App';

const ProtectedRoute = (props) => {

    let navigate = useNavigate();
    const user_context = useContext(UserContext);


    // let login_status = false
    // const [login_status, setstate] = useState(true);


    console.log("render- proteced route");
    console.log("login_status", props.login_status);

    // if (props.login_status) {
        
    if (user_context.login_status) {
        return < Outlet />
    }

    // return navigate("login")

    return (
        <Navigate to={"/login"} />
    );
}

export default ProtectedRoute;
