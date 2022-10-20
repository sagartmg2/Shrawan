import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useAuthenticate from '../../hook/useAuthenticate';

const Show = () => {

    const { handleFunction } = useAuthenticate();

    const [product, setProduct] = useState({});

    let navigatge = useNavigate()

    // product.revies = undefined

    // product info 
    // https://mern-ecommerce70.herokuapp.com/api/products/6302de41aedde6d0bd3779cc
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products/${id}`)
            .then(res => {
                console.log(res);
                setProduct(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* TODO: make images dynamic. */}
                            {/* {
                                product.map()
                            } */}
                            <div className="carousel-item active">
                                <img src="https://res.cloudinary.com/dtv8dtpkm/image/upload/v1661132352/rycvji7yccwibgpdr86k.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="http://res.cloudinary.com/dtv8dtpkm/image/upload/v1661132353/c65w92ivmajs3azflxmp.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                    <p>stock: {product.in_stock}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <hr />
            <h1>Reviews</h1>

            {/* optional chaining  ?. */}
            {
                product.reviews?.length > 0
                    ?
                    product.reviews?.map(el => {
                        return <li>{el.comment}</li>
                    })
                    :
                    <p>no reviews yet</p>
            }
            <form onSubmit={(e) => {
                e.preventDefault()

                // custom hook

                let callback = () => {
                    console.log("review added ");
                }

                handleFunction(callback);

                // if (!user) {
                //     navigatge("/login")

                // }

            }}>
                <button className='btn btn-primary'>add review</button>
            </form>
        </div>
    );
}

export default Show;
