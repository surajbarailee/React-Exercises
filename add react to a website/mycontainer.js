"use strict";

const e = React.createElement;

class button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}
const domContainer = document.querySelector("#container_div");
const domContainer1 = document.querySelector("#container_div1");

ReactDOM.render(e(button), domContainer);
ReactDOM.render(e(button), domContainer1);

// "use strict";

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return "You liked this.";
//     }

//     return e(
//       "button",
//       { onClick: () => this.setState({ liked: true }) },
//       "Like"
//     );
//   }
// }

// const domContainer = document.querySelector("#like_button_container");
// ReactDOM.render(e(LikeButton), domContainer);
