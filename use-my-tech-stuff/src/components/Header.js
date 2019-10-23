import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="App-header">
            <h1>Use My Tech Stuff</h1>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/ProductCard">Rentals</NavLink>
            <NavLink to="/">Log In</NavLink>
            <NavLink to="/CreateAccount">Create Account</NavLink>
        </div>
    )    
}

export default Header;