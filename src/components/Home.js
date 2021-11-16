import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
    debugger
    return (
        <div>
            <button className="openModalButton">Log In</button>

            { props.button_clicked && <Modal/>}

        </div>

        
    )
}

const mapStateToProps = state => {
    return {
        button_clicked: state.openModalButton
    }
}

//openModalButton's initial state is set to false 

export default connect(mapStateToProps)(Home);


/* Home is the homepage for all users NOT LOGGED IN, so will need to display all movies in DB by date with average user ratings for each  */