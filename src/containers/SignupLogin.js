import React from 'react';
import { withRouter, Link } from 'react-router-dom'

const SignupLogin = () => {
    return (
        <div>
            <Link to="/signup" className="nav-btn">SIGNUP | </Link>
            <Link to="/login" className="nav-btn">LOGIN</Link>
        </div>
    )
}

export default withRouter(SignupLogin);