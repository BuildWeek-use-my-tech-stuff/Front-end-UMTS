import React, { useContext, useEffect } from "react";
import {ProductsContext} from "../contexts/ProductsContext";
import Product from "./Product";
import axios from "axios";


const ProductList = () => {
    const [products, setProducts] = useContext({ ProductsContext });


    return (
        <div className="product-list">
            {products && products.map(product => <Product product={product} />)}
        </div>
    );
};

export default ProductList;