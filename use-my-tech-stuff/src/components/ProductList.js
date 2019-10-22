import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../contexts/ProductsContext";
import Product from "./Product";
import SearchForm from "./SearchForm";
import axios from "axios";


const ProductList = ({ displayed }) => {
    return (
        <div className="product-list">
            {displayed && displayed.map(product => <Product product={product} />)}
        </div>
    );
};

export default ProductList;