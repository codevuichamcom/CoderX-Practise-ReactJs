import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    setTimeout(() => { this.refs.input.focus() }, 5000);
  }
  render() {
    return (
      <div className="App">
        <input ref="input" type="text" />
      </div>
    );
  }
}

export default App;
