import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="App-header">
            <h1>Use My Tech Stuff</h1>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Dashboard">Rentals</NavLink>
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/">Log In</NavLink>
            <NavLink to="/NewSignUp">Create Account</NavLink>
        </div>
    )    
}

export default Header;