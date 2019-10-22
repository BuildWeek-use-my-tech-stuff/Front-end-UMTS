import React from "react";
import ProductList from "./ProductList";

const Dashboard = props => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <ProductList />
        </div>
    );
}

export default Dashboard;