import React from 'react';
import { connect } from 'react-redux';
import Logoff from './Logoff';
import SignupLogin from '../containers/SignupLogin';
import { withRouter, Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="nav">

            <div className="left">
                <div className="links">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                </div>

                <div className="links">
                    {props.currentUser
                    ? <Logoff />
                    : <SignupLogin />
                    }
                </div>
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

export default withRouter(connect(mapStateToProps)(NavBar));