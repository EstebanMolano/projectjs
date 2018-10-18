import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Proyecto from './components/Projects/Proyecto';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Proyecto/>
      </div>
    );
  }
}

export default App;
