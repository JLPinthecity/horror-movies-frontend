import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { showMenuItems } from '../actions/navBar.js'
import { Reorder, Search } from '@material-ui/icons';
import { openOrCloseModal } from '../actions/openOrCloseModal'
import { showOrHideSearchBar } from '../actions/showOrHideSearchBar';
import Logoff from "./Logoff";
import SearchBar from './SearchBar.js'
import LoginModal from './LoginModal'
import "./NavBar.css";

const NavBar = (props) => {

    const handleChange = () => {
        props.showMenuItems()
    }

    const changeModal = () => {
        props.openOrCloseModal()
    }

    const showSearchBar = () => {
        props.showOrHideSearchBar()

    }
//after we click, it needs to turn on showLinks aka change "false" to "true," which shows the menu items

//nav is the main container for the whole header

    return (
        <div className="nav sticky">

            <div className="row relative"> 

                <div className="hide">
                    <button className="menu-icon active-icon" onClick={handleChange}>
                        <Reorder/>
                    </button>
                </div>

                <div className="active-icon row-item">
                    <button className="active-icon row-item" onClick={showSearchBar} ><Search/></button>

                    { props.showSearch && <SearchBar/> }
                </div>

                <div className="header row-item">
                    horror flix
                </div>

                <div className="right relative row-item">
                    { props.currentUser ? <Logoff/> : <button onClick={changeModal} className="primary-button">Log In</button> }

                    { props.buttonClicked && <LoginModal/> }
                </div>

            </div>

            <ul className="menu" id={props.showLinks ? "hidden" : ""}>

                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/horror-movies">MOVIES</Link></li>
                <li></li>
            </ul>
        </div>
    )
}


//showLinks = false, menu not clicked
//!showLinks = true, menu clicked

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        showLinks: state.navBar,
        buttonClicked: state.openModalButton,
        showSearch: state.searchBar
    }
}

export default withRouter(connect(mapStateToProps, { showMenuItems, openOrCloseModal, showOrHideSearchBar })(NavBar));

