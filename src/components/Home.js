import React from 'react';
import { connect } from 'react-redux'

const Home = (props) => {


    return (

        <div>
            <img
            src={this.state.img}
            onMouseEnter={() => {
                this.setState({
                img: "http://www.toptipsclub.com/Images/page-img/keep-calm-and-prepare-for-a-test.png"
                })
            }}

            onMouseOut={() => {
                this.setState({
                img: "https://i.vimeocdn.com/portrait/58832_300x300"
                })
            }}
            />
        </div>  
    )
}

const mapStateToProps = state => {
    switchImage: state.backgroundImage
}

//openModalButton's initial state is set to false 

export default connect(Home);

/* Home is the homepage for all users NOT LOGGED IN, so will need to display all movies in DB by date with average user ratings for each  */