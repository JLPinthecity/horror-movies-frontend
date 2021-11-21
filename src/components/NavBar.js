import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { showMenuItems } from '../actions/navBar.js'
import { Reorder, Search, Close } from '@material-ui/icons';
import { openOrCloseModal } from '../actions/openOrCloseModal'
import { showOrHideSearchBar } from '../actions/showOrHideSearchBar';
import LoginModal from './LoginModal'

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

            <div>
                <button onClick={handleChange} className="hide icon">
                    <Reorder/>
                </button>
            </div>

            <div className="left">
            <button className="icon" onClick={showSearchBar} ><Search/></button>
            </div>
            

            
            <div className="header absolute">
                horror flix
            </div>

            <div className="right">
                <button onClick={changeModal} className="primary-button">Log In</button>

                { props.button_clicked && <LoginModal/> }
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
        button_clicked: state.openModalButton
    }
}

export default withRouter(connect(mapStateToProps, { showMenuItems, openOrCloseModal })(NavBar));

