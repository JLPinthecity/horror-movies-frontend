import React from 'react';
import { connect } from 'react-redux';
import { switchImage } from '../actions/homeComponent';
import { revertImage } from '../actions/homeComponent';
import "./Home.css";

const Home  = (props) => {

    const showImageOnHover = () => {
        props.switchImage()
    };

    const showOriginalImage = () => {
        props.revertImage()
    };


    return (
        <div>
            <img src={ props.image } onMouseEnter={ showImageOnHover } 
            onMouseOut={ showOriginalImage } />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        image: state.backgroundImage
    }
}

//openModalButton's initial state is set to false 

export default connect(mapStateToProps, { switchImage, revertImage })(Home);


/* Home is the homepage for all users NOT LOGGED IN, so will need to display all movies in DB by date with average user ratings for each  */