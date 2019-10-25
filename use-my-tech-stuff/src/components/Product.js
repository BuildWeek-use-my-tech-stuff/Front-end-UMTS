import React from "react";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

const Product = ({ product }) => {

    if(product.length === 0){
        return(
        <div className="loading">
            <Loader 
            type="Circles"
            color="#40968e"
            height={200} width={150} />
        </div>
        )
    } 


    return (
        <div className="product">
            <Link to={`/shop/${product.id}`}>
                <img src={product.photo} alt='Tech gear'/>
                <h1>{product.item_name}</h1>
            </Link>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
}

export default Product;
