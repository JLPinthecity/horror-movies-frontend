import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { showMenuItems } from '../actions/navBar.js'
import { Reorder, Search, Close } from '@material-ui/icons';
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
            

            <div className="menu-container">

                <div id={props.menuButtonClicked ? "hidden" : ""}>

                    <div className="menu-row">
                        <span className={props.menuButtonClicked ? "menu-title" : "hide"}>Menu</span>

                        <span className={props.menuButtonClicked ? "menu-close" : "hide"}><Close onClick={handleChange}/></span>
                    </div>

                    <ul className={props.menuButtonClicked ? "menu-column" : "menu"}>

                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/horror-movies">MOVIES</Link></li>
                        <li></li>
                    </ul>

                </div>

            </div>
        </div>
    )
}


//showLinks = false, menu not clicked
//!showLinks = true, menu clicked

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        menuButtonClicked: state.navBar,
        buttonClicked: state.openModalButton,
        showSearch: state.searchBar
    }
}

export default withRouter(connect(mapStateToProps, { showMenuItems, openOrCloseModal, showOrHideSearchBar })(NavBar));

