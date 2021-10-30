import React from 'react';
import { connect } from 'react-redux';

const SignUp = (props) => {
    debugger

    return (
        <form onSubmit={console.log("test")}>
            <input placeholder="name" type="text" name="username"  />
            <input placeholder="username" type="text" name="username"  />
            <input placeholder="password" type="text" name="password"  />
            <input type="submit" />
        </form>

    )

}

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    }
}

export default connect(mapStateToProps)(SignUp); 
