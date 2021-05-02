import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/shared";
import Nav from './Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from 'react-redux-loading-bar';
import Leaderboard from './Leaderboard';
import Login from './Login';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
        <LoadingBar />
        <div>
          {this.props.loading
          ? <Login />
          : <Fragment> 
              <Nav />
              <Route path='/leaderboard' component={Leaderboard} />
            </Fragment>}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading : authedUser === null
  }
}

export default connect(mapStateToProps)(App);
