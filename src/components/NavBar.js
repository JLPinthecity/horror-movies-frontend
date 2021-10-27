import React from 'react';
import { connect } from 'react-redux';

const NavBar = () => {
    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}


export default connect(mapStateToProps)(NavBar);