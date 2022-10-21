import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { setUserStore } from '../redux/reducer/user';
import { useDispatch } from "react-redux"
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

    const [show_spinner, setShowSpinner] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        setShowSpinner(true)
        // api call

        let url = "https://mern-ecommerce70.herokuapp.com/api/users/login"

        let data = state;

        // promise (pending resolve  reject  )

        let user_data;
        
        // if (role = "compnay") {
        //     user_data = { id: 1, name: "user", role: "company" }
        // } else {
        //     user_data = { id: 1, name: "user", role: "job-seeker" }

        // }

        axios.post(url, data, {})
            .then((res) => {
                //  status code 200 line
                axios.get("https://mern-ecommerce70.herokuapp.com/api/users/get-user", {
                    headers: {
                        Authorization: `Bearer ${res.data.access_token}`
                    }
                })
                    .then(user_res => {
                        localStorage.setItem("access_token", res.data.access_token)
                        dispatch(setUserStore(user_res.data))
                        navigate("/")

                    })
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
                <button type="submit" className="btn btn-primary" disabled={show_spinner}>
                    {
                        show_spinner
                        &&
                        <div class="spinner-border spinner-border-sm mx-2" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                    Submit</button>
                <p>not a user <Link to="/signup">signup</Link></p>
            </form>
        </div>
    );
}




export default Login;
