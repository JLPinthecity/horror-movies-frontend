import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ContentContainer from './components/ContentContainer';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <NavBar/>
        <ContentContainer/>
      </div>
  );
  }
  
}

export default connect(null, { getCurrentUser })(App);
