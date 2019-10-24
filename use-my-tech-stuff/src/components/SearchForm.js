import React, { useState, useEffect } from "react";

const SearchForm = ({ products, setDisplayed }) => {
    const [search, setSearch] = useState();

    useEffect(() => {
        setDisplayed(products.filter(product => product.name.includes(search)));
    }, [search]);

    const handleChanges = e => {
        setSearch(e.target.value);
    };

    return (
        <div className="search-form">
            <input onChange={handleChanges} value={search} placeholder="Search" />
        </div>
    );

}
export default SearchForm;  