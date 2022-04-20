import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currenttime = new Date(2020, 11, 3, 15).getHours();

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />}  */}
      {currenttime > 12 && <h1>Dont't awake. Its late</h1>}
    </div>
  );
}

export default App;
