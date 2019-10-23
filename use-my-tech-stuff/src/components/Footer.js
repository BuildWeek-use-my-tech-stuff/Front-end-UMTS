import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
    // <BrowserRouter>
    <div className="footerNav">
        {/* <NavLink exact to="/" activeClassName="activeNavButton">Log In</NavLink>
        <NavLink to="./NewUser" activeClassName="activeNavButton">Create Account</NavLink>

        <Route exact path="/LoginForm" component={ReturningUser}/>
        <Route path="/Form" component={NewUser}/> */}
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/ProductCard">Rentals</NavLink>
        <NavLink to="/">Log In</NavLink>
        <NavLink to="/CreateAccount">Create Account</NavLink>
    {/* // </BrowserRouter> */}
    </div>
    )
}



export default Footer;