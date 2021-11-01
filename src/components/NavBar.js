import React from 'react';
import { connect } from 'react-redux';
import Login from './LoginForm';
import Logoff from './Logoff';

const NavBar = (props) => {
    return (
        <div className="nav">
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(NavBar);