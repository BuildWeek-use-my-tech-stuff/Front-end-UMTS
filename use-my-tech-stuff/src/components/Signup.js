import React, { useState, useEffect } from 'react';
import { withFormik, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Footer from "./Footer";
import axiosWithAuth from '../utils/axiosWithAuth';

const Signup = (props) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/register", user)
            .then(res => {
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
                props.history.push("/dashboard");
            })
            .catch(err => console.log("Error creating account.\n", err));
    }

    // useEffect (() => {
    //     if(status) {
    //         setUser([...user, status])
    //         }
    //     }, [status]);

    return (
        <div className="newUserForm">
            <h1>
                Create An Account
            </h1>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChanges} className="firstNameForm" type="text" name="name" value={user.name} placeholder="Full Name" />


                <input onChange={handleChanges} className="emailForm" type="email" name="email" value={user.email} placeholder="E-Mail Address" />


                <input onChange={handleChanges} className="phoneForm" type="phone" name="phone" value={user.phone} placeholder="Phone Number" />


                <input onChange={handleChanges} className="passwordForm" type="password" name="password" value={user.password} placeholder="Password" />


                <button className="subButton">Submit</button>
            </form>



            {/* {user.map( person => (
                <ul key={person.id}>
                    <li>Name: {person.name}</li>
                    <li>Email: {person.email}</li>
                    <li>Password: {"●".repeat(person.password.length)}</li>
                </ul>
                    )
                )
            } */}

            {/* <Footer /> */}

        </div>
    );
};

export default Signup; 