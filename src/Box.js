import React, { Component } from 'react';

class Box extends Component {
  render() {
    let styles = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.color
    };

    return (
      <li>
        <div style={styles} className="Box" />
      </li>
    );
  }
}

export default Box;
