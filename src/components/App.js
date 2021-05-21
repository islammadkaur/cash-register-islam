import './App.css';
import Body from './Body'
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state ={
      page: 1
    }
  }

  render() {
    return (
      <div className="App">
        <Body {...this.state} />
    </div>
    );
  }
}

export default App;
