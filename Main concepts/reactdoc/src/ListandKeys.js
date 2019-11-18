import React, { Component } from "react";

export default class ListandKeys extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const double = numbers.map((n, index) => (
      <li key={index}>
        {n * 2}
        {/* <p>{index}</p>
        {index} */}
      </li>
    ));
    return (
      <div>
        <p>
          <h2>List And keys Section</h2>
          {double}
        </p>
      </div>
    );
  }
}
