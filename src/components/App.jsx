import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteDisplay, setNoteDisplay] = useState([]);

  function addItem(items, event) {
    setNoteDisplay((prevValue) => {
      return [...prevValue, items];
    });
    event.preventDefault();
  }

  function deleteItem(itemId) {
    setNoteDisplay((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== itemId;
      });
    });
    console.log(noteDisplay);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {noteDisplay.map((note, id) => (
        <Note
          key={id}
          id={id}
          title={note.title}
          content={note.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
