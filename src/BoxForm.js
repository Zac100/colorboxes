import React, { Component } from 'react';

class BoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = { width: '250px', height: '250px', backgroundColor: 'orange' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleAdd(this.state);
    this.setState();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width</label>
          <input
            name="width"
            id="width"
            type="text"
            value={this.state.width}
            onChange={this.handleChange}
          />

          <label htmlFor="height">height</label>
          <input
            name="height"
            id="height"
            type="text"
            value={this.state.height}
            onChange={this.handleChange}
          />

          <label htmlFor="backgroundColor">Background Color</label>
          <input
            name="backgroundColor"
            id="backgroundColor"
            type="text"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BoxForm;
