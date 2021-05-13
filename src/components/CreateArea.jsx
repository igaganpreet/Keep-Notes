import React, { useState } from "react";

function CreateArea() {
  const [noteInput, setNoteInput] = useState({ title: "", noteContent: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setNoteInput((prevValue) => {
        return {
          title: event.target.value,
          noteContent: prevValue.noteContent
        };
      });
    } else if (name === "content") {
      setNoteInput((prevValue) => {
        return {
          title: prevValue.noteContent,
          noteContent: event.target.value
        };
      });
    }

    console.log(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          // value={noteInput.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          // value={noteInput.noteContent}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
