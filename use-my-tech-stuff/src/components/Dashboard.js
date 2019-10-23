import React, { useState, useContext } from "react";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";
import { ProductsContext } from "../contexts/ProductsContext";

const Dashboard = props => {
    const { products, setProducts } = useContext(ProductsContext);
    const [displayed, setDisplayed] = useState(products);
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SearchForm products={products} setDisplayed={setDisplayed} />
            <ProductList displayed={displayed} />
        </div>
    );
}

export default Dashboard;