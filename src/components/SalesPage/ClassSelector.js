import React, { useState } from "react";
import "./ClassSelector.css";
function ClassSelector({ open, onSubmit }) {
  const [value, setValue] = useState("1");
  return (
    <div className="class_selection_modal">
      <select
        name="class_selector"
        id="class_selector"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>

      <button className="submit_class_button" onClick={() => onSubmit(value)}>
        Submit
      </button>
    </div>
  );
}

export default ClassSelector;
