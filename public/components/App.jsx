import React from "react";

// function App() {
//   return (
//     <div>
//     <h1 className="heading">Heading<h1>
//     <div className="card">
//     <div className="top">
//     <h2 className="name">Beyonce</h2>
//     <img src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//     alt="avatar_img" alt="beyonce_img" />
//     </div>
//     <div className="bottom">
//     <p>+123 432 452</p>
//     <p>beyonce@gmail.com</p>
//       </div>
//     </div>
// </div>
//   )
// }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">Beyonce</h2>
          <img
            src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            alt="avatar_img"
            alt="beyoncepic"
          />
        </div>
        <div className="bottom">
          <p>+123 543 123</p>
          <p>b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default App();
