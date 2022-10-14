import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {


    /* 
        unauthnticated =>  user is not logged in  401 
        unauthorized  => user is logged in but he doesnot have access to particular path  403(forbidden) 

        Authentication
        Authorization
    
    */


    const [state, setState] = useState(
        {
            email: "testing@testing.com",
            password: "password",
        }
    )

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // api call

        let url = "https://mern-ecommerce70.herokuapp.com/api/users/login"

        let data = state;

        // promise (pending resolve  reject  )

        axios.post(url, data)
            .then((res) => {
                //  status code 200 line
                console.log({ res })

                //  TODO: redirect to login page

                localStorage.setItem("access_token",res.data.access_token)

                navigate("/")

            })
            .catch((err) => {
                // 400
                // 500
                console.log({ err })
            })

    }

    function handleChange(e) {

        setState({
            ...state,
            [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value
        })

    }


    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label required-field">Email address</label>
                    <input type="email" className="form-control" id="" onChange={handleChange} name="email" value={state.email} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="" onChange={handleChange} name="password" value={state.password} aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p>not a user <Link to="/signup">signup</Link></p>
            </form>
        </div>
    );
}




export default Login;
