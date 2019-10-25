import React, { useState, useContext } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import Header from './Header';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';

const NewLogin = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '', 
    })
    const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post("/auth/login", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push("/dashboard")    
        })
        .catch(err => console.log(err.response))
}
    return ( 
        <div >

            <h1>Log In</h1>

            <Header />

            <form onSubmit={handleSubmit} className="loginForm" >
                <input  className="nameForm"
                type='text'
                name='username'
                placeholder='Username'  
                value={credentials.username}
                onChange={handleChanges}
                required
                />
                <input  className="passwordForm"
                type='password'
                name='password'
                placeholder='Password'  
                value={credentials.password}
                onChange={handleChanges}
                required
                />
                <button type='submit' className="subButton">Login</button>
            </form>

            <p>Don't have an account? Create one today!</p>

            <NavLink to="/NewSignUp" className="createAccButton">Create Account</NavLink>

            

        </div>
    );
}

export default NewLogin;