import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    let styles = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.backgroundColor
    };

    return (
      <div style={styles} className="Box">
        <button onClick={() => this.props.handleDelete(this.props.id)}>
          X
        </button>
      </div>
    );
  }
}

export default Box;
