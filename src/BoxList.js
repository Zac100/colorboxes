import React, { Component } from 'react';
import Box from './Box';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = { boxes: [] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(box) {
    let addBox = { ...box, id: uuid() };

    this.setState(st => ({
      boxes: [...st.boxes, addBox]
    }));
  }

  render() {
    let boxes = this.state.boxes.map(box => (
      <Box
        width={box.width}
        height={box.height}
        color={box.color}
        handleAdd={this.handleAdd}
      />
    ));
    return (
      <div className="BoxList">
        <ul>{boxes}</ul>
      </div>
    );
  }
}

export default BoxList;
