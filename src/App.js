import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ContentContainer from './components/ContentContainer';
import SignUp from './components/SignUp';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import { BrowserRouter as Router, 
        Route, 
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
        <Router>
          <Switch>
            <Route exact path="/" render={()=> loggedIn ? <ContentContainer /> : <Home/> }/>

            <Route exact path="/login" component={LoginForm}/>

            <Route exact path="/signup" component={SignUp}/>

            <Route exact path="/horror-movies" component={ContentContainer}/>
          </Switch>
        </Router>
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
