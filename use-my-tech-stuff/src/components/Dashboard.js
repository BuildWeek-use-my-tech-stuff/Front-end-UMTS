import React from "react";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";

const Dashboard = props => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <SearchForm />
            <ProductList />
        </div>
    );
}

export default Dashboard;