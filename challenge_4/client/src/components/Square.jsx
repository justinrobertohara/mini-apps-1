import React from 'react';

const divStyle = {
  border: '5px solid pink'
};

export default class Square extends React.Component {
  render() {
    return (
      <td style={divStyle}>
        X:{this.props.x}, Y: {this.props.y}
      </td>
    );
  }
}
