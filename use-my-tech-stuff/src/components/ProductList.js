import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";
import Loader from 'react-loader-spinner'


const ProductList = ({ displayed }) => {


    if(displayed.length === 0){
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
        <div className="product-list">
            {displayed && displayed.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default ProductList