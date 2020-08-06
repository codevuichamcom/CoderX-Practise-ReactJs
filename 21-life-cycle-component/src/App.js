import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    console.log("App constructed")
    super(props);
    this.state = {
      showCouter: true
    }
  }
  hideShowCouter = () => {
    this.setState({ showCouter: !this.state.showCouter })
  }
  componentDidMount() {
    console.log("App did mount");
  }
  componentDidUpdate() {
    console.log('App did update')
  }
  render() {
    console.log('App render');
    return (
      <div className="App">
        <button onClick={() => this.hideShowCouter()}>Togle Counter</button>
        {this.state.showCouter && <Counter />}
      </div>
    );
  }

}

export default App;
