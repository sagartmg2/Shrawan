import React from 'react';
import { useState } from 'react';
import ErrorMessage from './component/ErrorMessage';

const Signup = () => {


    // const [email, setemail] = useState("initialState");
    // const [username, setusername] = useState("initialState");
    // const [password, setpassword] = useState("initialState");
    // const [phone, setphone] = useState("initialState");


    const [state, setState] = useState(
        {
            email: "",
            username: "",
            password: " initial password",
            phone: " initial phone",
            terms: true,
        }
    )

    const [errors, setError] = useState({
        email: "alraedy ",
        username: " required..",
        password: "8 charcters"
    })

    function handleSubmit(e) {
        e.preventDefault();

        console.log(" call the api..");

        let errors = [
            {
                "value": "",
                "msg": "the email field is already user",
                "param": "email",
                "location": "body"
            }
        ]

        // console.log({ state });
        // console.log(e.target.password.value);
        // console.log({ email });
    }

    function handleChange(e) {

        // TODO: identify which input element is being changed....

        console.log(e.target.name);


        // this.setState({
        //     key: value
        // })

        // setState(1)

        // obj = {
        //     a:1,
        //     b:2,
        //     a:112312,
        // }



        setState({
            ...state,
            [e.target.name]: e.target.value
        })

        // if (e.target.name == "username") {
        //     setusername(e.target.value)
        // }
        // else if (e.target.name == "password") {
        //     setpassword(e.target.value)
        // }
    }

    return (
        <div>
            <h1>Signup From</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='required-field'>username </label>
                    <input type="text" name='username' onChange={handleChange} value={state.username} />
                    <ErrorMessage state={state} name="username" errors={errors}  />
                </div>
                <div>
                    <label className='required-field'>email</label>
                    <input type="email" name='email' onChange={handleChange} value={state.email} />
                    <ErrorMessage msg="required" state={state} name="email"  errors={errors} />
                </div>
                <div>
                    <label>password</label>
                    <input type="passsword" name='password' onChange={handleChange} value={state.password}  errors={errors} />
                    {/* {
                        !state.password
                        &&
                        <ErrorMessage msg={errors.password} />
                    } */}
                </div>
                <div>
                    <label>phone</label>
                    {/* + 977 - 967 */}
                    <input type="text" name='phone' onChange={handleChange} value={state.phone} />
                </div>
                <div>
                    <label htmlFor='terms'>Aggerree termss and conditions</label>
                    <input id='terms' type="checkbox" name='terms' onChange={handleChange} value={state.terms} />
                </div>
                <button type='submit' disabled={!state.terms}>submit </button>
            </form>
        </div>
    );
}

export default Signup;
