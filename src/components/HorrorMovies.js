import React from 'react';
import { connect } from 'react-redux'

const HorrorMovies = (props) => {
    return (

    )
}

const mapStateToProps = state => {
    return {
        movies = state.horrorMovies
    }
}

export default connect(mapStateToProps)(HorrorMovies);