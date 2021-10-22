import React from "react";
import { connect } from 'react-redux';
import { updateLoginForm } from "../actions/loginForm";


const Login = (props) => {
    
    const handleChange = event => {
        
        const { name, value } = event.target
        const updatedFormData = {
            
            name, 
            value
        }
        
        props.updateLoginForm(updatedFormData)
    }

    return (
        <form >
            <input placeholder="username" type="text" name="username" value={props.username} onChange={handleChange} />
            <input placeholder="password" type="text" name="password" value={props.password} onChange={handleChange} />
            <input type="submit" />
        </form>

    )
}

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}
export default connect(mapStateToProps, { updateLoginForm })(Login);