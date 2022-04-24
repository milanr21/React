import React from "react";

// function App() {
//   var isDone = true;

//   const strikethrough = { textDecoration: "line-through" };

//   return <p style={isDone ? strikethrough : null}>But Milk</p>;
// }

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unstrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>Change the strike through</button>
      <button onClick={unstrike}>Remove the strike through</button>
    </div>
  );
}

export default App;
