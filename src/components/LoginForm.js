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
        event.preventdefault();
        props.login(props.loginForm);

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

export default connect(mapStateToProps, { updateLoginForm })(Login);