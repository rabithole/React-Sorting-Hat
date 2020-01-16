import React, { Component } from 'react';

import './App.css';

import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">RK Sorting Hat</h1>
        </header>
        <p className="App-intro">
          This is where the magic happens!
        </p>
        <LandingPage />
      </div>
    );
  }
}

export default App;
