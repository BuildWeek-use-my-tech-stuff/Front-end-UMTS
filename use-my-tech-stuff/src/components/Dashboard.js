import React, { useState, useContext, useEffect } from "react";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";
import { ProductsContext } from "../contexts/ProductsContext";

const Dashboard = props => {
    const { products, setProducts } = useContext(ProductsContext);
    const [displayed, setDisplayed] = useState(products);
    useEffect(() => { 
        console.log("Products in Dashboard:\n", products);
        setDisplayed(products);
    }, []);
    return (
        <div className="dashboard">
            <h2>Tech Gear for Rent</h2>
            <div className="prodListCont">
                <SearchForm products={products} setDisplayed={setDisplayed} />
                <ProductList displayed={displayed} />
            </div>
        </div>
    );
}

export default Dashboard;