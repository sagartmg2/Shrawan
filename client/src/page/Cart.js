import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {

    const { value: cart_items } = useSelector((state) => state.cart)


    console.log({ cart_items });

    const navigate = useNavigate()

    /* 

    {
        "_id": "6350aaaf4b1d5d884e266ad8",
        "name": "dd",
        "price": 100,
        "in_stock": 0,
        "description": "",
        "categories": [],
        "brands": [],
        "images": [],
        "created_by": "63500adb9a795c20aa460750",
        "reviews": [],
        "createdAt": "2022-10-20T01:55:59.559Z",
        "updatedAt": "2022-10-20T01:55:59.559Z",
        "__v": 0,
        "user": {
            "_id": "63500adb9a795c20aa460750",
            "name": "sandhya",
            "email": "sandhya@34gmail.com",
            "role": "seller",
            "__v": 0
        },
        "quantity": 1
    }
     */

    function placeOrder() {

        console.log("api call");
        axios.post("https://mern-ecommerce70.herokuapp.com/api/orders", {
            products: cart_items
        }, {
            headers: {
                Authorization: `Beare ${localStorage.getItem("access_token")}`
            }
        }).then(res => {
            //  clear cart-items
            navigate("/order")
        })


    }


    let total_price = 1212

    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">price</th>
                        <th scope="col">quanity</th>
                        <th scope="col">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart_items.map((product, index) => {
                            return <tr>
                                <th scope="row">{index}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.quantity * product.price}</td>
                            </tr>
                        })
                    }
                    < tr >
                        <td colSpan={4} className="text-align-center text-center">Total</td>
                        <td >1212</td>
                    </tr>

                </tbody>
            </table>
            <button type='button' onClick={placeOrder} >place order</button>
        </div >
    );
}

export default Cart;
