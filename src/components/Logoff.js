import React from "react";
import { connect } from 'react-redux';
import { logout } from "../actions/currentUser";

const Logoff = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        props.logout()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Log Out" />
        </form>

    )
}

export default connect(null, { logout })(Logoff);