import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
    // <BrowserRouter>
    <div className="footerNav">
        
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/ProductCard">Rentals</NavLink>
        <NavLink to="/">Log In</NavLink>
        <NavLink to="/NewSignUp">Create Account</NavLink>
        

        {/* <NavLink to="/">Log In</NavLink> */}
        {/* <NavLink to="/DashItems">Create Account</NavLink> */}
        

        </div>
    )
}



export default Footer;