import React, { Component } from "react";

export default class EventHandling extends Component {
  constructor() {
    super();
    this.state = {
      input1: "input1",
      input2: "input2"
    };
  }
  render() {
    const handleChange = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    return (
      <div>
        <input
          type="text"
          onChange={handleChange}
          name="input1"
          value={this.state.input1}
        />
        <input
          type="text"
          onChange={handleChange}
          name="input2"
          value={this.state.input2}
        />
        {this.state.input1}
        {this.state.input2}
      </div>
    );
  }
}
