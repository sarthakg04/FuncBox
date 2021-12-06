import React, { useState } from "react";
import "./ClassSelector.css";
function ClassSelector({ open, onSubmit, onCancel }) {
  const [value, setValue] = useState("1");
  return (
    <div className="class_selection_modal">
      <label htmlFor="class_selection" style={{ margin: "20px" }}>
        <h2>Select Class</h2>
      </label>
      <select
        name="class_selector"
        id="class_selector"
        style={{ width: "200px", height: "30px" }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="1">Class 1</option>
        <option value="2">Class 2</option>
        <option value="3">Class 3</option>
        <option value="4">Class 4</option>
        <option value="5">Class 5</option>
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
      </select>

      <div className="buttons_section">
        <button className="submit_class_button" onClick={() => onSubmit(value)}>
          Submit
        </button>
        <button className="cancel_button" onClick={() => onCancel()}>
          Cancel Payment
        </button>
      </div>
    </div>
  );
}

export default ClassSelector;
