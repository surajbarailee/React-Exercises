import React, { Component } from "react";

export default class StateandLifecycle extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        Using state to show new date
        <br />
        {this.state.date.toLocaleTimeString()}
        {console.log("hey")}
      </div>
    );
  }
}
