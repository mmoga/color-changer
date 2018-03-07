import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// import needed actions for dispatching


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pick a color!</h1>
        <div className="App--colorDisplay">YOU<br />SUCK!</div>
        <input type="color" value="#ffffff" />
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = null; // this should be a function, but will work with null
// mapDispatchToProps
const mapDispatchToProps = null; // this will work too
// wrap the app in connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
