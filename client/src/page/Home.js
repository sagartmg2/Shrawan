import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { addToCart } from '../redux/reducer/cart';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import useAuthenticate from '../hook/useAuthenticate';

import no_image_found from "../asset/image/No-image-found.jpg"

import { job_data } from "../data/jobs"

const Home = () => {

    const { handleFunction } = useAuthenticate()

    const dispatch = useDispatch();

    // let navigatge = useNavigate()

    // const { user } = useSelector((state) => state.user)

    /* 
        primitive datatype

        non-primitive data type
            reference data-type
            []
            {}
    */

    const [search_term, setSearchTerm] = useState("");

    const [meta_data, setProductsMetaData] = useState({
        total: 0,
        page: 1,
        per_page: 25
    });

    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [per_page, setPerPage] = useState(25)
    const [products, setProducts] = useState([]);

    let meta_data_obj = useMemo(() => meta_data, [meta_data])

    // let meta_data_obj2 = useMemo(() =>{return {...meta_data_obj}},[meta_data_obj])

    const calculate = (num) => {
        for (let i = 0; i < 1000000000; i++) {

        }
        return num * 2;
    }

    // let result = useMemo(() => calculate(meta_data.page),[meta_data.page])
    // let result = calculate(meta_data.page);
    // let result = "";

    console.log("render..");

    const [jobs, setjobs] = useState([]);

    useEffect(() => {

        axios.get(`https://mern-ecommerce70.herokuapp.com/api/products?search_term=${search_term}&page=${meta_data.page}`)
            .then(res => {
                setProducts(res.data.data[0].data)
                let { total, per_page, page } = res.data.data[0].metadata[0]
                setProductsMetaData(res.data.data[0].metadata[0])
                // setTotal(total)
                // setPage(page)
                // setPerPage(per_page)
            })

        setjobs(job_data)

    }, [search_term, page, per_page, meta_data.page]);


    function handleAddToCart(product) {

        // if (!user) {    
        //     navigatge("/login")
        // }

        let callback = () => {
            dispatch(addToCart(product))
        }

        handleFunction(callback);

        // TODO: connect with redux

    }

    return <img src={require("../asset/image/No-image-found.jpg")} />
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

            {/* <h1>{result}</h1> */}

            <div className='row'>
                {
                    products.map(product => {
                        return <div class="col-3 p-3">
                            <div className='card'>
                                <Link to={`/products/${product._id}`}>
                                    <img class={`card-img-top ${product.images.length == 0 ? "img-thumbnail" : ""}`} src={product.images.length > 0 ? product.images[0] : require("../asset/image/No-image-found.jpg")} alt="Card image cap" />
                                    {/* <img class={`card-img-top ${product.images.length == 0 ? "img-thumbnail":""}`} src={product.images.length > 0 ? product.images[0] : no_image_found} alt="Card image cap" /> */}
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
                        // setPage((e.selected + 1))
                        setProductsMetaData({
                            ...meta_data, page: (e.selected + 1)
                        })
                    }}
                    pageRangeDisplayed={meta_data.per_page}
                    // pageRangeDisplayed={per_page}
                    // pageCount={((total / per_page))}
                    pageCount={((meta_data.total / meta_data.per_page))}
                    // pageCount={5}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}

export default Home;
