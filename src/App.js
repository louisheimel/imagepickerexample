import React, { Component } from 'react';
import logo from './logo.svg';
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
    return (
      <div className="App">
        <input onChange={this.handleInput} value={this.state.userInput} />
        <button onClick={this.getUserInput}>Submit Url</button>
        {/* here's a sample image: http://placekitten.com/200/300 */}
        <img src={this.state.userTyped} />
      </div>
    );
  }
}

export default App;
