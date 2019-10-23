import React, { useState, useEffect, useContext } from 'react';
import { withFormik, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Footer from "./Footer";
import axiosWithAuth from '../utils/axiosWithAuth';
import { UserContext } from "../contexts/UserContext";

const Signup = (props) => {
    const { user, setUser } = useContext(UserContext);

    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const handleChanges = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newUser);
        axiosWithAuth()
            .post("/auth/register", newUser)
            .then(res => {
                console.log(res.data);
                localStorage.setItem("token", res.data.token);
                props.history.push("/dashboard");
                setUser(res.data);
            })
            .catch(err => console.log("Error creating account.\n", err));
    }

    // useEffect (() => {
    //     if(status) {
    //         setNewUser([...newUser, status])
    //         }
    //     }, [status]);

    return (
        <div className="newUserForm">
            <h1>
                Create An Account
            </h1>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChanges} className="firstNameForm" type="text" name="username" value={newUser.username} placeholder="Username" />


                <input onChange={handleChanges} className="emailForm" type="email" name="email" value={newUser.email} placeholder="E-Mail Address" />


                <input onChange={handleChanges} className="phoneForm" type="phone" name="phone" value={newUser.phone} placeholder="Phone Number" />


                <input onChange={handleChanges} className="passwordForm" type="password" name="password" value={newUser.password} placeholder="Password" />


                <button className="subButton">Submit</button>
            </form>



            {/* {newUser.map( person => (
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