import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import './Editor.css'

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)
  function handleChange(editor, data, value) {
    onChange(value)
  }
  return (
    <>
    <div class="editorheader"><div class="editortext">Code Editor</div></div>
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true
        }}
      />
    </div>
    </>
  )
}
