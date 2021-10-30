import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Logoff from './components/Logoff';
import ContentContainer from './components/ContentContainer';
import SignUp from './components/SignUp';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, 
        Route } from 'react-router-dom';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <NavBar/>
        <Router>
          <Route exact path="/login" component={LoginForm}/>

          <Route exact path="/signup" component={SignUp}/>

          <Route exact path="/horror-movies" component={ContentContainer}/>
        </Router>
      </div>
  );
  }
  
}

export default connect(null, { getCurrentUser })(App);
