import React, { Component } from "react";

export default class BoilingVerdict extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      console.log(this.props);
    }
    return (
      <div>
        {this.props.celsius >= 100 ? (
          <p>Water would boil</p>
        ) : (
          <p>Water would not boil</p>
        )}
      </div>
    );
  }
}
