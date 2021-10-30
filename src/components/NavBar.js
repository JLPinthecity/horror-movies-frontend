import React from 'react';
import { connect } from 'react-redux';
import Login from './LoginForm';
import Logoff from './Logoff';

const NavBar = (props) => {
    return (
        <div className="nav">
            { props.currentUser ?  <p>Welcome, {props.currentUser.attributes.name}</p> : "" }
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(NavBar);