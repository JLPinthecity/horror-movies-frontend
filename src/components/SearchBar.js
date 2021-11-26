import React from 'react';
import { Close } from '@material-ui/icons';
import { connect } from 'react-redux';
import { showOrHideSearchBar } from '../actions/showOrHideSearchBar';
import "./Search.css";

const SearchBar = (props) => {

    return (
        <div className="wrap">
    
            <div className="search-open">

                <form className="searchform">
                    <input type="search" name="search" value="" placeholder="Search our movies" className="search-input"/>
                </form>

                <span className="remove-search" onClick={ props.showOrHideSearchBar }><Close/></span>
            </div>

        </div>
    )
}

export default connect(null, { showOrHideSearchBar })(SearchBar);