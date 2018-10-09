import React, { Component } from 'react';
import logo from './logo.svg';
import ImagePicker from './components/ImagePicker/ImagePicker.js';
import './App.css';


class App extends Component {
  state = {
    userTyped: '',
    userInput: ''
  }

  getUserInput = () => {
    this.setState({ userTyped: this.state.userInput })
  }

  handleInput = e => {
    this.setState({ userInput: e.target.value })
  }

  render() {
    return <ImagePicker
      handleInput={this.handleInput}
      userInput={this.state.userInput}
      getUserInput={this.getUserInput}
      userTyped={this.state.userTyped}
    />;
  }
}

export default App;
