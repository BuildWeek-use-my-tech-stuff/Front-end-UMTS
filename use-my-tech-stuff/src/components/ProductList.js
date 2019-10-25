import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import Product from "./Product";


const ProductList = ({ displayed }) => {


    return (
        <div className="product-list">
            {displayed && displayed.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default ProductList