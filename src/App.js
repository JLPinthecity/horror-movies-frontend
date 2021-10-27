import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <NavBar/>
  );
  }
  
}

export default connect(null, { getCurrentUser })(App);
