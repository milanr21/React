import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div class="full">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Messi"
      img="https://imageio.forbes.com/specials-images/imageserve/5ec595d45f39760007b05c07/0x0.jpg?format=jpg&crop=1491,1490,x989,y74,safe&height=416&width=416&fit=bounds"
      alt="messi_img"
      tel="+132 432 112"
      email="messi@gmail.com"
    />
    <Card
      name="ronaldo"
      img="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
      alt="ronaldo_img"
      tel="+321 345 665"
      email="ronaldo@hotmail.com"
    />
  </div>,
  document.getElementById("root")
);
