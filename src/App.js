import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

// import needed actions for dispatching
import { changeColor } from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pick a color!</h1>
        <div className="App--colorDisplay" style={{backgroundColor: this.props.color}}>YOU<br />SUCK!</div>
        <input type="color" onChange={(e) => this.props.changeColor(e.target.value)}/>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}; // this should be a function, but will work with null
// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (color) => dispatch(changeColor(color))
  }
}; // this will work too
// wrap the app in connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
