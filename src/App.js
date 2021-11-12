import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ContentContainer from './components/ContentContainer';
import SignUp from './components/SignUp';
import MovieCard from './components/MovieCard'
import NewMovieForm from './components/NewMovieForm';
import About from './components/About';
import Logoff from './components/About';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import { Route, 
        Switch, 
        withRouter } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div>
        <NavBar/>
          <Switch>
            <Route exact path="/" render={(props)=> loggedIn ? <ContentContainer /> : <Home/> }/>

            <Route exact path="/login" component={LoginForm}/>

            <Route exact path="/signup" component={SignUp}/>

            <Route exact path="/logoff" component={Logoff}/>

            <Route exact path="/about" component={About}/>

            <Route exact path="/horror-movies" component={ContentContainer}/>

            <Route exact path="/horror-movies/new" component={NewMovieForm}/>

            <Route exact path="/horror-movies/:slug" component={MovieCard}/>

          </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
