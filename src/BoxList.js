import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);

    this.state = { boxes: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(box) {
    let addBox = { ...box, id: uuid() };

    this.setState(st => ({
      boxes: [...st.boxes, addBox]
    }));
  }

  handleDelete(id) {
    console.log(id);
    console.log(this.state.boxes.filter(box => box.id !== id));

    this.setState(st => ({
      boxes: st.boxes.filter(box => box.id === id)
    }));
  }

  render() {
    let boxes = this.state.boxes.map(box => (
      <Box
        width={box.width}
        height={box.height}
        backgroundColor={box.backgroundColor}
        key={uuid()}
        id={uuid()}
        handleDelete={this.handleDelete}
      />
    ));
    return (
      <div className="BoxList">
        <BoxForm handleAdd={this.handleAdd} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
