import React from 'react';
import { withRouter, Link } from 'react-router-dom'

const SignupLogin = () => {
    return (
        <div>
            <Link to="/signup">SIGNUP</Link> <Link to="/login" classname="TEST">LOGIN</Link>
        </div>
    )
}

export default withRouter(SignupLogin);