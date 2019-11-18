import React from "react";
import Jsx from "./jsx.js";
import { RenderingElements } from "./Rendering-elements";
import Components from "./components.js";
import StateandLifecycle from "./StateandLifecycle.js";
import EventHandling from "./EventHandling";
import ConditionalRendering from "./ConditionalRendering";
import ListandKeys from "./ListandKeys";
import Forms from "./Forms";
//use of hello world
function App() {
  const componentvalue = {
    name: {
      name1: "insidename",
      name2: "outsidername"
    }
  };
  return (
    <div className="App">
      Hello World
      <Jsx />
      <div className="clock" id="clock">
        <RenderingElements />
      </div>
      <Components name={"suraj"} componentvalue1={componentvalue} />
      <StateandLifecycle />
      <EventHandling />
      <ConditionalRendering />
      <ListandKeys />
      <Forms />
    </div>
  );
}

export default App;
