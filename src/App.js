import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" role="banner">
          <h1 className="App-title">Calendar</h1>
        </header>

        <Calendar />
      </div>
    );
  }
}

export default App;
