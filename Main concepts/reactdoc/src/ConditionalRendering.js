import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  render() {
    return (
      <div>
        {console.log(this.state.date.getDay())}
        {this.state.date.getDay() != 0 && <h1>Sad Its not sunday</h1>}
        {this.state.date.getDay() != 0 ? (
          <h1>Sad Its not sunday</h1>
        ) : (
          <h1>Horray its sunday</h1>
        )}
      </div>
    );
  }
}
