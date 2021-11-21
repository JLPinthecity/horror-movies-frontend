import React from 'react';
import { Close } from '@material-ui/icons';
import "./Search.css";

const SearchBar = () => {
    return (
        <div className="wrap">
    
            <div className="search search-open">

                <form className="searchform">
                <input type="search" name="search" value="" placeholder="Search our movies" className="input_box"/>
                </form>

                <span className="remove-search"><Close/></span>
            </div>

        </div>
    )
}

export default SearchBar;