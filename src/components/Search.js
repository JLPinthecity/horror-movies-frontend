import React from 'react';
import { Close } from '@material-ui/icons';
import "./Search.css";

const Search = () => {
    return (
        <div className="wrap">
    
            <div className="search search-open">
               
                <form className="searchform">
                <input type="search" name="search" value="" placeholder="Search our movies" className="input_box"/>
                </form>

                <span class="remove-search"><Close/></span>
            </div>

        </div>
    )
}

export default Search;