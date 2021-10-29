import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import HorrorMovies from './components/HorrorMovies';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <NavBar/>
        <HorrorMovies/>
      </div>
  );
  }
  
}

export default connect(null, { getCurrentUser })(App);
