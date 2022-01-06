import React from "react";
import { connect } from 'react-redux';
import { logout } from "../actions/currentUser";
import { withRouter } from "react-router";

const Logoff = ({ history, logout }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        logout()
        history.push("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" className="primary-button" value="Log Out" />
        </form>

    )
}

export default withRouter(connect(null, { logout })(Logoff));