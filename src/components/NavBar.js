import React from 'react';
import { connect } from 'react-redux';
import Logoff from './Logoff';
import SignupLogin from '../containers/SignupLogin';

const NavBar = (props) => {
    return (
        <div className="nav">
            {props.currentUser ? <Logoff/> : <SignupLogin/> }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(NavBar);