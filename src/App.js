import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

const ColorDisplay = props => {
  return (
    <div>
      This will show the color chosen
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <ColorDisplay />
        <input type="color" name="" id=""/>
      </div>
    );
  }
}

export default App;
