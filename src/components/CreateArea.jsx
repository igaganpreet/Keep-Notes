import React, { useState } from "react";

function CreateArea(props) {
  const [noteInput, setNoteInput] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setNoteInput((prevValue) => {
        return {
          title: value,
          content: prevValue.content
        };
      });
    } else if (name === "content") {
      setNoteInput((prevValue) => {
        return {
          title: prevValue.title,
          content: value
        };
      });
    }

    // console.log(noteInput);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteInput.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteInput.content}
        />
        <button
          onClick={(event) => {
            return props.onAdd(noteInput, event);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
