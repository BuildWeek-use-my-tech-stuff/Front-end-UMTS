import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from "formik";
import axios from "axios";
import * as Yup from "yup";

const  NewUser = ({values, errors, touched, status}) => {
    const [user, setUser] = useState ([]);

    useEffect (() => {
        if(status) {
            setUser([...user, status])
            }
        }, [status]);

    return(
        <div className="newUserForm">
            <h1>
                Create An Account
            </h1>

            <Form>
                <Field className="firstNameForm" type="text" name="name" placeholder="Full Name" />
                {touched.name && errors.name && (<p className="error">{errors.name}</p>)}

                <Field className="emailForm" type="email" name="email" placeholder="E-Mail Address" />
                {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

                <Field className="phoneForm" type="phone" name="phone" placeholder="Phone Number" />
                {touched.phone && errors.phone && (<p className="error">{errors.phone}</p>)}

                <Field className="passwordForm" type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

                <button className="subButton">Submit</button>  
            </Form>

            

            {user.map( person => (
                <ul key={person.id}>
                    <li>Name: {person.name}</li>
                    <li>Email: {person.email}</li>
                    <li>Password: {"●".repeat(person.password.length)}</li>
                </ul>
                    )
                )
            }
        </div>
    )
}

const NewUserFormik = withFormik({
        mapPropsToValues({name, email, password}){
            return{
                name: name || "",
                email: email || "",
                password: password || "",
            };
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().min(2, "Name must have more than one character.").required("Required field."),
            email: Yup.string().email("Email not valid."),
            phone: Yup.string().min(10, "Phone Number must have 10 digits"),
            password: Yup.string().min(8, "Password must have at least 8 characters.").required("Required field."),
        })
        
    })(NewUser)

export default NewUser; 