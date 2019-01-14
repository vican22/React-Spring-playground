import React from "react";
import { Spring } from "react-spring";
function component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: "-500" }}
      to={{ opacity: 1, marginTop: "0" }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component1</h1>
            <p>
              That just sounds like slavery with extra steps. Wubba lubba dub
              dub! Don't even trip about your pants, dawg. We got an extra pair
              right here. Please god, oh lord, hear my prayers…! YES! Fuck you
              god, not today bitch!
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};

export default component1;
