import Board from './Board.jsx';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Connect 4</h1>
        <Board />
      </div>
    );
  }
}
