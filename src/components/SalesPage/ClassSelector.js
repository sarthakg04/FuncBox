// Desgined by Kaustubh

import React, { useState } from "react";
import "./ClassSelector.css";
import "./ClassDropdown.css";

function ClassSelector({ plan, open, onSubmit, onCancel }) {
  const [value, setValue] = useState(null);

  function doSomething(e) {
    
    document.querySelector(".drop-down .options ul").style.display = "block";
  }

  function doSomething2(e) {
    const innerText = e.target.innerText;
    setValue(innerText.split(" ")[1]);
    document.querySelector(".drop-down .selected span").innerHTML = innerText;
    document.querySelector(".drop-down .options ul").style.display = "none";
  } 


  return (
    <div className="class_selection_modal">
      <label className="class_selection" htmlFor="class_selection">
        <p>You selected <span className="plan_selected"> {plan.toUpperCase()} </span> plan !</p>
        <p className="please_select_your_class">Please select your class : </p>
      </label>


      <div className="drop-down">
        <div className="selected">
          <span onClick={doSomething}>Select Class</span>
        </div>
        <div className="options">
          <ul>
            <li onClick={doSomething2}>
              Class 1
            </li>
            <li onClick={doSomething2}>
              Class 2
            </li>
            <li onClick={doSomething2}>
              Class 3
            </li>
            <li onClick={doSomething2}>
              Class 4
            </li>
            <li onClick={doSomething2}>
              Class 5
            </li>
            <li onClick={doSomething2}>
              Class 6
            </li>
            <li onClick={doSomething2}>
              Class 7
            </li>
            <li onClick={doSomething2}>
              Class 8
            </li>
          </ul>
        </div>
      </div>

      <div className="buttons_section">

        <div className="wrap">
          <button className="submit_class_button" onClick={() => onSubmit(value)}>
            Proceed for Payment
          </button>
        </div>

        <div className="wrap">
          <button className="cancel_class_button" onClick={() => onCancel()}>
            Cancel Payment
          </button>
        </div>

      </div>
    </div>
  );
}

export default ClassSelector;
