import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import EnterNumber from '../EnterNumber/EnterNumber';
import CurrentTotal from '../CurrentTotal/CurrentTotal';
import History from '../History/History';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <EnterNumber />
        <CurrentTotal />
        <History />
      </>
    );
  }
}

export default App;
