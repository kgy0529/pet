import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from "react-router-dom"


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        let url="https://de9f36ab-aded-4f7d-b0c7-8bcde54663f8.mock.pstmn.io/products"
        axios.get(url).then((reseult)=>{
            const products=reseult.data.products;
            setProducts(products);
        }).catch(error =>{
            console.log(error)
        })
    }, [])

    console.log([products])
    return (
        <div className='productWrap'>
           <h2>NEW ARRIVALS</h2>
           <p>Pickup with free gift</p>
           <div className="product-flex">

           {
                products.map((product, idx) =>{
                    return(
                        <div className="product-card" key={idx}>
                            <Link className='product-link' to={`/productpage/${idx}`}>
                                <div>
                                <img src={process.env.PUBLIC_URL + product.imageUrl} alt={product.name} />
                                </div>
                                <div className="product-content">
                                    <div className="product-name">
                                        <span className='product-seller'>({product.seller})</span>
                                        {product.name}</div>
                                    <div className="product-price">{product.price}</div>
                                </div>
    
                            </Link>
                        </div>
                    )
                })
           }
            </div>
        </div>
    );
};

export default Products;