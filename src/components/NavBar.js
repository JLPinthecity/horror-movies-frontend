import React from 'react';
import { connect } from 'react-redux';
import Logoff from './Logoff';
import SignupLogin from '../containers/SignupLogin';
import { withRouter, Link } from 'react-router-dom';
import { showMenuItems } from '../actions/navBar.js'
import { Reorder, Search, Close } from '@material-ui/icons';

const NavBar = (props) => {

    const handleChange = () => {
        props.showMenuItems()
    }

    //after we click, it needs to turn on showLinks aka change "false" to "true," which shows the menu items


    return (
        <nav className="nav">

            <ul className="left" id={props.showLinks ? "hidden" : ""}>

                <li><Link to="/" className="nav-1">HOME</Link></li>
                <li><Link to="/about" className="nav-2">ABOUT</Link></li>
                <li>{props.currentUser ? <Logoff /> : <SignupLogin />}</li>
           
            </ul>

            <div className="hide">
                <button id="" onClick={handleChange}>{props.showLinks ? <Close/> : <Reorder/>}</button>
            </div>

            <div className="right">
                <input type="text" placeholder="search"/>
                <button id="right"><Search/></button>
            </div>
            
        </nav>
    )
}

//showLinks = false, menu not clicked
//!showLinks = true, menu clicked

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        showLinks: state.navBar
    }
}

export default withRouter(connect(mapStateToProps, { showMenuItems })(NavBar));

