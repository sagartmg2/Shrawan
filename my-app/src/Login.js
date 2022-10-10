import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {

    const navigate = useNavigate()

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("tester");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("here");

        // TODO: api call   == > user  {
        //    name: role, address
        // }

        props.setLoginStatus(true)

        //   TODO: identify the route from which we got redirected.
        navigate("/")
        localStorage.setItem("logged_in", JSON.stringify(true))

        // TODO: not a user ? create a singup page ...  username, password, email, address, phone,  [checkbox] agree termans and conditions
        // let signup button to be clicked only when terms agreed.
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>username :</label>
                <input type="text" name="username" value={username} onChange={() => { }} />
                <label>password :</label>
                <input type="text" name="password" value={password} onChange={() => { }} />
                <button type='submit'>login</button>
                <p>not a user ? <Link to="/signup">signup</Link></p>
            </form>
        </div>
    );
}

export default Login;
