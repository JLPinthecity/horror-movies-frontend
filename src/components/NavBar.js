import React from 'react';
import { connect } from 'react-redux';
import Logoff from './Logoff';
import SignupLogin from '../containers/SignupLogin';
import { withRouter, Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="nav">

            <div className="left">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                {props.currentUser ? <Logoff/> : <SignupLogin/> }
            </div>

            <div className="right">

            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(NavBar);