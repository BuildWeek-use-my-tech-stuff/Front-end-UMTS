import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <div className="product">
            <Link to={`/shop/${product.id}`}>
                <img src={product.photo} alt='Tech gear'/>
                <h3>{product.item_name}</h3>
            </Link>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
}

export default Product;
