import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Create = () => {


    const [alert, setAlert] = useState({
        msg: "",
        status: ""
    })

    const [state, setState] = useState(
        {
            name: "product",
            price: 100,
            images: [],
            categories: ""
        }
    )


    function handleSubmit(e) {
        e.preventDefault();
        // api call

        let url = "https://mern-ecommerce70.herokuapp.com/api/products"

        let data = state;

        // promise (pending resolve  reject  )

        let form_data = new FormData();

        form_data.append("name", state.name)
        form_data.append("price", state.price)
        form_data.append("categories", state.categories)

        state.categories.split(",").map(el => {
            form_data.append("categories[]", el)
        })

        let temp = [...state.images];
        temp.forEach(image => {
            form_data.append("images", image)
        })

        axios.post(url, form_data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then((res) => {
                console.log(res);
                setAlert({
                    msg: "product added",
                    "status": "success"
                })
            })
            .catch((err) => {
                // 400
                // 500
                console.log({ err })
            })

    }

    function handleChange(e) {
        if (e.target.type == "file") {
            setState({
                ...state,
                [e.target.name]: e.target.files
            })
        } else {
            setState({
                ...state,
                [e.target.name]: e.target.type == "checkbox" ? e.target.checked : e.target.value
            })
        }

    }
    return (
        <div className='container'>
            {
                alert.msg
                &&
                <div class={`alert alert-${alert.status}`} role="alert">
                    {alert.msg}
                </div>

            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label required-field">name</label>
                    <input type="type" className="form-control" id="" onChange={handleChange} name="name" value={state.name} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">price</label>
                    <input type="text" className="form-control" id="" onChange={handleChange} name="price" value={state.price} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">description</label>
                    <textarea className="form-control" id="" onChange={handleChange} name="description" value={state.description} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Categories</label>
                    <input type="text" className="form-control" id="" onChange={handleChange} name="categories" value={state.categories} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">images</label>
                    <input type="file" multiple className="form-control" id="" onChange={handleChange} name="images" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Create;
