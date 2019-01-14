import React, { Component } from "react";
import { Spring } from "react-spring";

class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component2</h1>
              <p>
                Rubber baby buggy bumpers! This isn't Game of Thrones, Morty.
                Snuffles want to be understood. Snuffles need to be understood.
                Come on, flip the pickle, Morty. You're not gonna regret it. The
                payoff is huge.
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component3!
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};
export default Component2;
