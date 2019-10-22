import React, { useState } from "react";

const SearchForm = props => {
    handleChanges = e => {
        props.setDisplayed(props.products.filter(product => product.name.includes(e.target.value)));
    }

    return (
        <div className="search-form">
            <input onChange={handleChanges} placeholder="Search" />
        </div>
    );

}
export default SearchForm;