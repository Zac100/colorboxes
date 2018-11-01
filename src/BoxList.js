import React, { Component } from 'react';
import logo from './logo.svg';
import './Box';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = { boxes: [] };
    this.handleAdd = this.handleAdd.bind(this);
  }
  render() {
    return (
      <div className="App">
        <BoxList />
      </div>
    );
  }
}

export default BoxList;
