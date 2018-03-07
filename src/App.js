import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';


class App extends Component {
  state = {
    background: '#fff',
  };
  handleColor = (event) => {
    this.setState({ background: event.target.value });
    console.log(this.state.background);
  };
  render() {
    const divStyle = {
      backgroundColor: this.state.background,
    }
    return (
      <div className="App">
        <h1>Pick a color!</h1>
        <div className="App--colorDisplay" style={divStyle}>YOU<br />SUCK!</div>
        <input type="color" value="#ffffff" id="" onChange={ this.handleColor }/>
      </div>
    );
  }
}

export default App;
