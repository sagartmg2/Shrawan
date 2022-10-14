import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

/*

    CRUD operations
    create 
    read   
    update
    delete

    http methods
        GET  - read 
        POST  - create
        PUT / PATCH  - update
        DELETE  - delete

        OPTIONS - preflight
    
    STATUS CODE
        200   success 
        300   redirect || waring
        400   400(bad request) 401(unauthenticated) 403(forbidden) 404(page/resource not found)
        500   500(server error) 
*/





const Signup = () => {

    const [state, setState] = useState(
        {
            name: "name",
            email: "testing@testing.com",
            password: "password",
            role: "buyer",
        }
    )

    const navigate =  useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // api call

        let url = "https://mern-ecommerce70.herokuapp.com/api/users/signup"

        let data = state;

        // promise (pending resolve  reject  )

        axios.post(url, data)
            .then((res) => {
                //  status code 200 line
                console.log({ res })

                //  TODO: redirect to login page
                    
                navigate("/login")

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
        <div>
            <div className='container mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label required-field">Name</label>
                        <input type="text" className="form-control" onChange={handleChange} name="name" value={state.name} id="" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label required-field">Email address</label>
                        <input type="email" className="form-control" id="" onChange={handleChange} name="email" value={state.email} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="" onChange={handleChange} name="password" value={state.password} aria-describedby="emailHelp" />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Confirm passwowrd</label>
                        <input type="text" className="form-control" id="" aria-describedby="emailHelp" />
                    </div> */}
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Role</label>
                        {/* <input type="password" className="form-control" id="exampleInputPassword1" /> */}

                        {/* TODO: use dropdown with value seller and buyer */}
                        <select class="form-select" aria-label="Default select example" name="role" onChange={handleChange} value={state.role}>
                            <option value="">Select Role</option>
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p>not a user <Link to="/signup">signup</Link></p>

                    {/* 
                        TODO:: after signup  retrive the values of form. 
                    */}

                </form>
            </div>
        </div>
    );
}

export default Signup;
