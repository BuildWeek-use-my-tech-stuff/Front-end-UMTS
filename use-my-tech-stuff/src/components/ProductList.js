import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";
import axios from "axios";


const ProductList = ({ displayed }) => {
    //const { products, setProducts } = useContext({ ProductsContext });


    return (
        <div className="product-list">
            {displayed && displayed.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default ProductList;