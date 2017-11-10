import React, { Component } from 'react';
import './style.css';
import Header from '../Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
      </div>
    );
  }
}

export default App;
