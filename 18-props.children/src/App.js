import React, { Component } from 'react';
import './App.css';
import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Hello">I'am Quan</Accordion>
      </div>
    );
  }
}

export default App;
