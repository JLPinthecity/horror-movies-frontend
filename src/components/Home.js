import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/openModal'
import LoginModal from './LoginModal'

const Home = (props) => {
    debugger

    const handleChange = () => {
        props.openModal()
    }
    return (
        <div>
            <button onClick={handleChange} className="openModalButton">Log In</button>

            { props.button_clicked && <LoginModal closeModal={props.handleChange}/>}

        </div>

        
    )
}

const mapStateToProps = state => {
    return {
        button_clicked: state.openModalButton
    }
}

//openModalButton's initial state is set to false 

export default connect(mapStateToProps, { openModal })(Home);


/* Home is the homepage for all users NOT LOGGED IN, so will need to display all movies in DB by date with average user ratings for each  */