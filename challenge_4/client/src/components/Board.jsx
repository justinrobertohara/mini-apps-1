import React from 'react';
import Square from './Square.jsx';

const divStyle = {
  border: '5px solid blue'
};

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table>
          <tr style={divStyle}>
            <Square x={0} y={6} />
            <Square x={1} y={6} />
            <Square x={2} y={6} />
            <Square x={3} y={6} />
            <Square x={4} y={6} />
            <Square x={5} y={6} />
            <Square x={6} y={6} />
          </tr>
          <tr style={divStyle}>
            <Square x={0} y={5} />
            <Square x={1} y={5} />
            <Square x={2} y={5} />
            <Square x={3} y={5} />
            <Square x={4} y={5} />
            <Square x={5} y={5} />
            <Square x={6} y={5} />
          </tr>
          <tr style={divStyle}>
            <Square x={0} y={4} />
            <Square x={1} y={4} />
            <Square x={2} y={4} />
            <Square x={3} y={4} />
            <Square x={4} y={4} />
            <Square x={5} y={4} />
            <Square x={6} y={4} />
          </tr>
          <tr style={divStyle}>
            <Square x={0} y={3} />
            <Square x={1} y={3} />
            <Square x={2} y={3} />
            <Square x={3} y={3} />
            <Square x={4} y={3} />
            <Square x={5} y={3} />
            <Square x={6} y={3} />
          </tr>
          <tr style={divStyle}>
            <Square x={0} y={2} />
            <Square x={1} y={2} />
            <Square x={2} y={2} />
            <Square x={3} y={2} />
            <Square x={4} y={2} />
            <Square x={5} y={2} />
            <Square x={6} y={2} />
          </tr>
          <tr style={divStyle}>
            <Square x={0} y={1} />
            <Square x={1} y={1} />
            <Square x={2} y={1} />
            <Square x={3} y={1} />
            <Square x={4} y={1} />
            <Square x={5} y={1} />
            <Square x={6} y={1} />
          </tr>
          <tr style={divStyle}>
            <Square x={0} y={0} />
            <Square x={1} y={0} />
            <Square x={2} y={0} />
            <Square x={3} y={0} />
            <Square x={4} y={0} />
            <Square x={5} y={0} />
            <Square x={6} y={0} />
          </tr>
        </table>
      </div>
    );
  }
}
