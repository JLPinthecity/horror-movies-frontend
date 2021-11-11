import React from 'react';
import LoginForm from './LoginForm';
import Logoff from './Logoff';
import SignUp from './SignUp';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Welcome, please log in or sign up.

            <Link to="/signup">Sign up</Link>

            OR 

            <Link to="/login">Log in</Link>

        </div>
    )
}

export default Home;


/* Home is the homepage for all users NOT LOGGED IN, so will need to display all movies in DB by date with average user ratings for each  */