import React, { Component } from "react";

export default class jsx extends Component {
  render() {
    const element = <label>JSX(javascript extensions)</label>;
    return (
      <div>
        <p>Hello there {element}</p>
      </div>
    );
  }
}
