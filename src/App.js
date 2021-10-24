import React from 'react';
import './App.css';
import Login from './components/LoginForm';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
    <div className="App">
      <Login />
    </div>
  );
  }
  
}

export default connect(null, { getCurrentUser })(App);
