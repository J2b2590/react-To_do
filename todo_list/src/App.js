import React, { Component } from 'react';
import './App.css';
import List from './List.js';
import Form from './Form.js'

class App extends Component {

  constructor(){
    super()

    this.state = {

      list: []
    }
  }


  addToList = (chore) =>{
    const state = this.state;
    state.list.push(chore)
    this.setState(state)

  }

  crossOff = (mark) =>{
    const state = this.state;
    mark.currentTarget.classList.toggle("App-strikeThrough");
  }






  render() {
    return (
      <div>
        <Form addToList={this.addToList}/>
        <List list={this.state.list} crossOff={this.crossOff}/> 
        
      </div>
      
    );
  }
}

export default App;
