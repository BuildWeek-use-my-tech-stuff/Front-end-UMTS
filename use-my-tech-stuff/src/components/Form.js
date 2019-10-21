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
            <Form>
                <Field className="firstNameForm" type="text" name="name" placeholder="First Name" />
                {touched.name && errors.name && (<p className="error">{errors.name}</p>)}

                <Field className="lastNameForm" type="text" name="name01" placeholder="Last Name" />
                {touched.name2 && errors.name2 && (<p className="error">{errors.name2}</p>)}

                <Field className="emailForm" type="email" name="email" placeholder="E-Mail Address" />
                {touched.email && errors.email && (<p className="error">{errors.email}</p>)}

                <Field className="passwordForm" type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (<p className="error">{errors.password}</p>)}

                <button className="subButton">Submit</button>  
            </Form>

            {user.map( person => (
                <ul key={person.id}>
                    <li>Name: {person.name}</li>
                    <li>Name2: {person.name2}</li>
                    <li>Email: {person.email}</li>
                    <li>Password: {"●".repeat(person.password.length)}</li>
                </ul>
                    )
                )
            }
        </div>
    )
}

const FormikNewUser = withFormik({
        mapPropsToValues({name, name2, email, password, terms}){
            return{
                name: name || "",
                name2: name2 || "",
                email: email || "",
                password: password || "",
                terms: terms || false
            };
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().min(2, "Name must have more than one character.").required("Required field."),
            name2: Yup.string().min(2, "Name must have more than one character.").required("Required field."),
            email: Yup.string().email("Email not valid.").required("Required field."),
            password: Yup.string().min(8, "Password must have at least 8 characters.").required("Required field."),
            terms: Yup.boolean().oneOf([true], "Must accept Terms of Service.").required()
        })
        
    })(NewUser)

export default FormikNewUser; 