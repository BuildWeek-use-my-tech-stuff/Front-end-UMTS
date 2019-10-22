import React, { useContext, useState } from "react";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";

const Dashboard = props => {
    const [products] = useContext({ ProductContext });
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