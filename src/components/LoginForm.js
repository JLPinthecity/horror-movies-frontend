import React from "react";
import { connect } from 'react-redux';

const Login = () => {

    handleSubmit = () => {
        
    }

    handleChange = () => {
      
    }
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" onChange={this.handleChange} />
            <input type="text" name="password" onChange={this.handleChange} />
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
export default connect()(Login);