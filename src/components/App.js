import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/shared";
import Nav from './Nav';
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {

  useEffect(() => {
    props.dispatch(handleInitialData())
  })

  return (
    <Router>
      <div className="App">
        <Nav />
        
      </div>
    </Router>
  );
}

// function mapStateToProps({authedUser, users}) {
  
// }

export default connect()(App);
