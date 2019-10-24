import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import Header from './Header';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';

const LoginForm = (props) => {
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
            props.history.push("/account")    
        })
        .catch(err => console.log(err.response))
}
    return ( 
        <div className="loginForm">

            <h1>Log In</h1>

            <Header />

            <form onSubmit={handleSubmit}>
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

            <NavLink to="/CreateAccount" className="createAccButton">Create Account</NavLink>

            <Footer />

        </div>
     );
}
 
export default LoginForm;