import React from "react";

import MovementArea from "./MovementArea";

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#112d4e" }}>Use Arrow keys to move React</h1>
        <MovementArea />
      </div>
    );
  }
}

export default App;
