import React from "react";
import ReactDOM from "react-dom";
// import pi, { doublepi, triplepi } from "./math.js";

//wildcard method
import * as pi from "./math";

ReactDOM.render(
  <ul>
    {/* <li>{pi}</li>
    <li>{doublepi()}</li>
    <li>{triplepi()}</li> */}
    <li>{pi.default}</li>
    <li>{pi.doublepi()}</li>
    <li>{pi.triplepi()}</li>
  </ul>,
  document.getElementById("root")
);
