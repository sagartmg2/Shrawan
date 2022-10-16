import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get("https://mern-ecommerce70.herokuapp.com/api/products")
            .then(res => {
                setProducts(res.data.data[0].data)
            })

    }, []);


    return (
        <div className='container'>

            {/* {
                JSON.stringify(products)
            } */}

            <div className='row'>
                {
                    products.map(product => {
                        return <div class="col-3 p-3">
                            <div className='card'>
                                <img class="card-img-top" src={product.images.length > 0 ? product.images[0] : "#"} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">${product.price}</p>
                                    <a href="#" class="btn btn-primary">Add To Cart</a>
                                </div>
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    );
}

export default Home;
