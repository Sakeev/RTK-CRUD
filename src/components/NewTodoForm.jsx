import React from "react";

const NewTodoForm = ({ value, updateText, handleAction }) => {
  //   console.log(value, updateText, handleAction);
  return (
    <label>
      <input
        type="text"
        placeholder="new todo"
        value={value}
        onChange={(e) => {
          updateText(e.target.value);
        }}
      />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default NewTodoForm;
