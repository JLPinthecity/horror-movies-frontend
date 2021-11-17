import React from 'react';
import { connect } from 'react-redux';
import { openOrCloseModal } from '../actions/openOrCloseModal'
import LoginModal from './LoginModal'

const Home = (props) => {

    const handleChange = () => {
        props.openOrCloseModal()
    }
    return (
        <div>
            <button onClick={handleChange} className="primary-button">Log In</button>

            { props.button_clicked && <LoginModal/>}

        </div>

        
    )
}

const mapStateToProps = state => {
    return {
        button_clicked: state.openModalButton
    }
}

//openModalButton's initial state is set to false 

export default connect(mapStateToProps, { openOrCloseModal })(Home);


/* Home is the homepage for all users NOT LOGGED IN, so will need to display all movies in DB by date with average user ratings for each  */