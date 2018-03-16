import React, { Component } from 'react';
import './App.css';
// import { Header } from './components/Header';
// import { Bot } from './components/Bot';
import { History } from './components/History';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <Bot /> */}
        <History />
      </div>
    );
  }
}

export default App;
