import React, { Component } from 'react';
import classNames from 'classnames';
import Container from './components/Container/Container';
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="giphy-board-container">
          <Container />
        </div>
    );
  }
}

export default App;
