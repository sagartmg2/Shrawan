import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addToCart } from '../redux/reducer/cart';
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Home = () => {
    const dispatch = useDispatch();



    // === 


    const [search_term, setSearchTerm] = useState("");

    // const [meta_data, setProductsMetaData] = useState({
    // });
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [per_page, setPerPage] = useState(25)

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(`https://mern-ecommerce70.herokuapp.com/api/products?search_term=${search_term}&page=${page}`)
            .then(res => {
                setProducts(res.data.data[0].data)
                let { total, per_page, page } = res.data.data[0].metadata[0]
                setTotal(total)
                setPage(page)
                setPerPage(per_page)
            })

    }, [search_term,page,per_page]);

    function handleAddToCart(product) {

        // TODO: connect with redux
        dispatch(addToCart(product))
    }


    return (
        <div className='container'>

            {/* {
                JSON.stringify(products)
            } */}
            <form className="d-flex">
                <input className="form-control me-2" type="search" onChange={(e) => { setSearchTerm(e.target.value) }} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            {/* 

                TODO: // create a section to filter products 
                     min price 
                     max price 
                     rating

             */}

            <div className='row'>
                {
                    products.map(product => {
                        return <div class="col-3 p-3">
                            <div className='card'>
                                <Link to={`/products/${product._id}`}>
                                    <img class="card-img-top" src={product.images.length > 0 ? product.images[0] : "#"} alt="Card image cap" />
                                </Link>
                                <div class="card-body">
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">${product.price}</p>
                                    <button type='button' class="btn btn-primary" onClick={() => handleAddToCart(product)} >Add To Cart</button>
                                </div>
                            </div>
                        </div>

                    })
                }
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={(e) => {
                        setPage((e.selected + 1))
                    }}
                    pageRangeDisplayed={per_page}
                    pageCount={((total / per_page))}
                    // pageCount={5}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}

export default Home;
