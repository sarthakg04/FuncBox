import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "./Editor.css";
import RunBtn from "../CodeEditor/assets/RunBtn.svg";
import save from "../CodeEditor/assets/save.svg";
import share from "../CodeEditor/assets/share.svg";
import stamp from "../CodeEditor/assets/stamp.svg";
import { hash } from "../Hasher/Hasher";
export default function Editor(props) {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);
  function handleChange(editor, data, value) {
    onChange(value);
  }

  function saveCode() {
    console.log(hash(value));
  }
  function toggleQr() {
    document.getElementById("qr").classList.toggle("active");
    console.log("Hello");
  }
  return (
    <div className="code__editor">
      <div className="heading">
        <p>Code Editor</p>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
        }}
      />
      <div className="icons">
        <div className="play">
          <a href="javascript:void(0)" onClick={props.updateCode}>
            <img src={RunBtn} alt="" />
          </a>
        </div>
        <div className="other__icons">
          <button onClick={saveCode}>
            <img src={save} alt="" />
          </button>
          <a href="javascript:void(0)">
            <img src={share} alt="" onClick={toggleQr} />
          </a>
          <a href="javascript:void(0)">
            <img src={stamp} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
