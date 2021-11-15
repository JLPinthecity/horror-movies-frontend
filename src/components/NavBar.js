import React from 'react';
import { connect } from 'react-redux';
// import Logoff from './Logoff';
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
            <div className="hide">
                <button id="" onClick={handleChange}>{props.showLinks ? <Close/> : <Reorder/>}</button>
            </div>

            <ul className="left" id={props.showLinks ? "hidden" : ""}>

                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li>{props.currentUser ? <Link to="/logoff">LOGOFF</Link> : <SignupLogin />}</li>

            </ul>

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

