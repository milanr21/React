import React, { useState } from "react";

function App() {
  const [ishover, hoverOverButton] = useState(false);

  function onHoverFunction() {
    hoverOverButton(true);
  }

  function onMouseOutFunction() {
    hoverOverButton(false);
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: ishover ? "black" : "white" }}
        onMouseOver={onHoverFunction}
        onMouseOut={onMouseOutFunction}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
