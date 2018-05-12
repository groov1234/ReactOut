import React, { Component } from 'react';
import Breakout from './components/breakout';
import Header from './components/background';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="header">
            <Header/>
          </div> 
        <div className="game">
          <Breakout/>
        </div>
      </div>
    );
  }
}

export default App;
