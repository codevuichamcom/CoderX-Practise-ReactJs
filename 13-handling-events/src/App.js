import React, { Component } from 'react';
import './App.css';
import Modal from './component/Modal';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      openModal:false
    }
  }
  openModal = () =>{
    this.setState({openModal:true});

  }
  closeModal = () =>{
    this.setState({openModal:false})
  }
  render(){
    return (
      <div className="App" style={{backgroundColor:"#ccc",height:"1000px"}}>
        <button onClick={this.openModal}>Show modal</button>
        {
          this.state.openModal?
          <Modal parent={this} isModalShowing={this.state.openModal}/>
          :null
        }
        
      </div>
    );
  }
  
}
