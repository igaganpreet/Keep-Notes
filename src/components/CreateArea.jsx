import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [noteInput, setNoteInput] = useState({ title: "", content: "" });
  const [isExpand, setExpand] = useState(false);

  function handleClick() {
    setExpand(true);
  }

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
  }

  return (
    <div>
      <form className="create-note">
        {isExpand ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={noteInput.title}
          />
        ) : null}
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          value={noteInput.content}
        />
        <Zoom in={isExpand ? true : false}>
          <Fab
            onClick={(event) => {
              return props.onAdd(noteInput, event);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
