import React from 'react'
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import ReturningUser from "./LoginForm";
import NewUser from "./SignUpForm";

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
    <div>
     
        <NavLink to="/">Log In</NavLink>
        <NavLink to="/DashItems">Create Account</NavLink>

    </div>
    )
}



export default Footer;