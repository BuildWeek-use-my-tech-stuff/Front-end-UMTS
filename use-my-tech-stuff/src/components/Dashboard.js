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
    }, [products]);
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SearchForm products={products} setDisplayed={setDisplayed} />
            <ProductList displayed={displayed} />
        </div>
    );
}

export default Dashboard;