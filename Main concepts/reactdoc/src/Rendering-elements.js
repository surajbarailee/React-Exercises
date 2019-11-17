import React, { Component } from "react";
import ReactDOM from "react-dom";

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("clock"));
}

export var RenderingElements = () => {
  return <div>{setInterval(tick, 1000)}</div>;
};