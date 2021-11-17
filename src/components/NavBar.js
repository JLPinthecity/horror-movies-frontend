import React from 'react';
import { connect } from 'react-redux';
// import Logoff from './Logoff';
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

            <div className="hide">
                <button id="" onClick={handleChange}>{props.showLinks ? <Close/> : <Reorder/>}</button>
            </div>


            <div className="left">
                <input type="text" placeholder="search"/>
                <button id="left"><Search/></button>
            </div>

            
            <div className="header">
                HORRORFLIX
            </div>

            <ul className="right" id={props.showLinks ? "hidden" : ""}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/horror-movies">MOVIES</Link></li>
                <li></li>
            </ul>
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

