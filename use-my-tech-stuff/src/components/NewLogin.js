import React,{useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


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
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            props.history.push("/DashItems")    
        })
        .catch(err => console.log(err.response))
}

    return ( 
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='username'
            placeholder='username'  
            value={credentials.username}
            onChange={handleChanges}
            />
            <input 
            type='password'
            name='password'
            placeholder='password'  
            value={credentials.password}
            onChange={handleChanges}
            />
            <button type='submit'>Login</button>
        </form>
        </div>
     );
}
 
export default NewLogin;

