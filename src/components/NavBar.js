import React from 'react';
import { connect } from 'react-redux';
import Logoff from './Logoff';
import SignupLogin from '../containers/SignupLogin';
import { withRouter, Link } from 'react-router-dom';
import { showMenuItems } from '../actions/navBar.js'

const NavBar = (props) => {

    const handleChange = () => {
        props.showMenuItems()
    }

    //after we click, it needs to turn on showLinks aka change "false" to "true," which shows the menu items


    return (
        <div className="nav">

            <div className="left">
                <ul className="links" id={props.showLinks ? "hidden" : ""}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li>{props.currentUser ? <Logoff /> : <SignupLogin />}</li>
                </ul>

                <button onClick={handleChange}>MENU_BUTTON</button>
            </div>
    

            <div className="right">
                <input type="text" placeholder="search"/>
                <button>Search</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        showLinks: state.navBar.showLinks
    }
}

export default withRouter(connect(mapStateToProps, { showMenuItems })(NavBar));

