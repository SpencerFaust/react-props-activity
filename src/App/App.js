import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import EnterNumber from '../EnterNumber/EnterNumber';
import CurrentTotal from '../CurrentTotal/CurrentTotal';
import History from '../History/History';

class App extends Component {

  state = {
    historyList: [],
  }

  addNumber = (newNumber) => {
    console.log(newNumber);
    this.setState({
      historyList: [...this.state.historyList, newNumber]
    });
    ;
  }

  render() {
    return (
      <>
        <Header />
        <EnterNumber addNumber={this.addNumber} />
        <CurrentTotal />
        <History list={this.state.historyList} />
      </>
    );
  }
}

export default App;
