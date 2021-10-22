import React from "react";
import { connect } from 'react-redux';
import loginForm from "../reducers/loginForm";

const Login = (props) => {

    handleSubmit = () => {
        
    }

    handleChange = () => {
      
    }
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={props.username} onChange={this.handleChange} />
            <input type="text" name="password" value={props.password} onChange={this.handleChange} />
            <input type="submit" />
        </form>

    )
}

const mapStateToProps = state = {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);