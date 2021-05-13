import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={(event) => {
          return props.onDelete(props.id, event);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
