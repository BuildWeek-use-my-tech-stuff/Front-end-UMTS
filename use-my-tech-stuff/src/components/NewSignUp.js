import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import Header from './Header';
import Footer from './Footer';

const NewSignUp = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        phone: '',
        password: '', 
    })
    const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}
//   const handleSubmit = e => {
//     e.preventDefault();
//     axiosWithAuth().post("/auth/login", credentials)
//         .then(res => {
//             localStorage.setItem('token', res.data.token)
//             props.history.push("/CreateAccount")    
//         })
//         .catch(err => console.log(err.response))
// }
    return ( 
        <div className="signUpForm">

            <h1>Create Account</h1>

            <Header />

            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <input  className="nameForm"
                type='text'
                name='username'
                placeholder='Create Username'  
                value={credentials.username}
                onChange={handleChanges}
                />
                <input  className="emailForm"
                type='text'
                name='email'
                placeholder='E-Mail Address'  
                value={credentials.email}
                onChange={handleChanges}
                />
                <input  className="phoneForm"
                type='text'
                name='phone'
                placeholder='Phone Number'  
                value={credentials.phone}
                onChange={handleChanges}
                />
                <input  className="passwordForm"
                type='password'
                name='password'
                placeholder='Create Password'  
                value={credentials.password}
                onChange={handleChanges}
                />
                <button type='submit' className="subButton">Sign Up!</button>
            </form>

            <Footer />

        </div>
     );
}

// const checkoutDataSchema = Yup.object().shape({
//     name: Yup.string().min(2, "Name must have more than one character.").required("Required field."),
//     email: Yup.string().email("Email not valid."),
//     phone: Yup.string().min(10, "Phone Number must have 10 digits"),
//     password: Yup.string().min(8, "Password must have at least 8 characters.").required("Required field."),
// })

export default NewSignUp;