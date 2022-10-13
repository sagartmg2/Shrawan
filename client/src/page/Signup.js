import React from 'react';
import { Link } from "react-router-dom"
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
*/

const Signup = () => {
    return (
        <div>
            <div className='container mt-5'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name * </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Confirm passw</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Role</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        
                        {/* TODO: use dropdown with value seller and buyer */}

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
