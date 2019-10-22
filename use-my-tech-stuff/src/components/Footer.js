import React from 'react'
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReturningUser from "./LoginForm";
import NewUser from "./Form";

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    margin: "20px, 0"
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '30px',
  width: '100%',
}

function Footer() {
    return (
    // <BrowserRouter>
    <div>
        {/* <NavLink exact to="/" activeClassName="activeNavButton">Log In</NavLink>
        <NavLink to="./NewUser" activeClassName="activeNavButton">Create Account</NavLink>

        <Route exact path="/LoginForm" component={ReturningUser}/>
        <Route path="/Form" component={NewUser}/> */}
        <NavLink to="/">Log In</NavLink>
        <NavLink to="/CreateAccount">Create Account</NavLink>
    {/* // </BrowserRouter> */}
    </div>
    )
}



export default Footer;