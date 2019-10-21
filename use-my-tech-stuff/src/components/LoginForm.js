import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import * as Yup from "yup";
import FooterNav from './Footer';
import { BrowserRouter } from "react-router-dom";
import NewUser from './Form';
import { NavLink } from 'react-router-dom';

const  ReturningUser = ({values, errors, touched, status}) => {
    const [user, setUser] = useState ([]);

    useEffect (() => {
        if(status) {
            setUser([...user, status])
            }
        }, [status]);

    return(
        <div className="ReturningUserForm">
            <h1>
                Log In
            </h1>

            <Form>
                <Field className="emailForm" type="email" name="email" placeholder="E-Mail Address" />
                {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

                <Field className="passwordForm" type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

                <button className="subButton">Submit</button>  
            </Form>

            

            {user.map( person => (
                <ul key={person.id}>
                    <li>Email: {person.email}</li>
                    <li>Password: {"●".repeat(person.password.length)}</li>
                </ul>
                    )
                )
            }
        </div>
    )
}

const FormikReturningUser = withFormik({
        mapPropsToValues({email, password}){
            return{
                email: email || "",
                password: password || "",
            };
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Email not valid."),
            password: Yup.string().min(8, "Password must have at least 8 characters.").required("Required field."),
        })
        
    })(ReturningUser)

export default FormikReturningUser; 