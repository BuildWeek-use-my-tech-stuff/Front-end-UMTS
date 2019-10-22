import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/ProductsContext";
import Product from "./Product";
import axios from "axios";


const ProductList = () => {
    const [products, setProducts] = useContext({ ProductContext });
    const [displayed, setDisplayed] = useState(products);
    


    return (
        <div className="product-list">
            {displayed && displayed.map(product => <Product product={product} />)}
        </div>
    );
};

export default ProductList;