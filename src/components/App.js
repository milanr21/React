import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// first way or method

// function CardDes(cardEntry) {
//   return (
//     <Note
//       key={cardEntry.key}
//       title={cardEntry.title}
//       content={cardEntry.content}
//     />
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       {notes.map(CardDes)}
//       <Footer />
//     </div>
//   );
// }

// more good method - using arrow function

function App() {
  return (
    <div>
      <Header />
      {notes.map((cardEntry) => (
        <Note
          key={cardEntry.key}
          title={cardEntry.title}
          content={cardEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
