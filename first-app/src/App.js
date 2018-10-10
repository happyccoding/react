import React, { Component } from 'react';
import Ninja from './Ninja';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      {name:'Lucy', age:'45', sex:'Female', id:1},
      {name:'Lucy1', age:'46', sex:'Male', id:2},
      {name:'Lucy2', age:'47', sex:'Female', id:3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja=>ninja.id !== id);
    this.setState({ninjas: ninjas})
  }
  render() {
    return (
      <div>
        <Ninja deleteNinja = {this.deleteNinja} ninja = {this.state.ninjas} />
        <AddNinja addNinja = {this.addNinja} />
      </div>
    );
  }
}

export default App;
