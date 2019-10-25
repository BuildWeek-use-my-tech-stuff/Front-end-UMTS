import React, { useState, useEffect } from "react";

const SearchForm = ({ products, setDisplayed }) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        setDisplayed(products.filter(product => product.item_name.toLowerCase().includes(search.toLowerCase())));
    }, [search]);

    const handleChanges = e => {
        setSearch(e.target.value);
    };

    return (
        <div className="search-form">
            <input className="searchStyles"onChange={handleChanges} value={search} placeholder="Search" />
        </div>
    );

}
export default SearchForm;  