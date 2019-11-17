import React, { Component } from "react";

export default class Components extends Component {
  render() {
    return (
      <div>
        Component renders with the name{this.props.name}
        <br />
        {this.props.componentvalue1.name.name1}
        <br />
        {this.props.componentvalue1.name.name2}
      </div>
    );
  }
}
