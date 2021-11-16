import React from "react";
import { connect } from 'react-redux';
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

const Login = (props) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormData = {
            ...props.loginForm,
            [name]: value
        }
        
        props.updateLoginForm(updatedFormData)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(props.loginForm, props.history);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" type="text" name="username" value={props.loginForm.username} onChange={handleChange} />
            <input placeholder="password" type="text" name="password" value={props.loginForm.password} onChange={handleChange} />
            <input type="submit" />
        </form>

    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);



//history is a mutable prop
//it's an object, which means it's pass-by reference
//which means you can grab it and pass it along