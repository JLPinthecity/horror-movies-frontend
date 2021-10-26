import React from 'react';
import './App.css';
import Login from './components/LoginForm';
import Logoff from './components/Logoff';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      this.props.currentUser ? <Login /> : <Logoff />
  );
  }
  
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
