import { React, useState } from "react";

// function App() {
//   const [count, setCount] = React.useState(0);

//   console.log(count);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   function squareroot() {
//     setCount(Math.sqrt(count));
//   }

//   function power() {
//     setCount(count ** 2);
//   }

//   function multiple() {
//     setCount(count * count);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//       <button onClick={multiple}>×</button>
//       <button onClick={squareroot}>√</button>
//       <button onClick={power}>power</button>
//     </div>
//   );
// }

function App() {
  setInterval(showTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setDate] = useState(now);

  // setInterval(showTime(), 1000);

  function showTime() {
    const time = new Date().toLocaleTimeString();
    setDate(time);
  }

  // setInterval(showTime(), 1000);

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
