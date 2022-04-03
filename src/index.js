// import React from "react";
// import ReactDom from "react-dom";

// const customStyle = {
//   color: "red",
//   textAlign: "center",
//   fontSize: "35px",
//   textTransform: "uppercase",
//   letterSpacing: "3px",
//   border: "1px solid red"
// };

// customStyle.color = "green";

// ReactDom.render(
//   <h1 style={customStyle}>Hello World!</h1>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDom from "react-dom";

// const customColor = {
//   color: ""
// };

// const d = new Date(2019, 3, 11, 21);
// const hr = d.getHours();

// let greeting;

// if (hr < 12) {
//   greeting = "Good Morning";
//   customColor.color = "red";
// } else if (hr < 18) {
//   greeting = "Good Afternoon";
//   customColor.color = "green";
// } else {
//   greeting = "Good Night";
//   customColor.color = "blue";
// }

// ReactDom.render(
//   <h1 style={customColor} className="heading">
//     {greeting}
//   </h1>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDom from "react-dom";

import App from "./components/App";

ReactDom.render(<App />, document.getElementById("root"));
