import React, { useEffect, useState } from "react";
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
import { hash } from "../../features/hasher";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function Editor(props) {
  const { language, displayName, value, onChange, gid } = props;
  const [open, setOpen] = useState(true);
  const { token, userid } = useAuth();
  const apiurl = process.env.REACT_APP_API_URL;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  //"http://localhost:5000/codesave/save"
  useEffect(() => {
    console.log(userid);
  }, [userid]);
  async function saveCode() {
    if (gid !== -1) {
      console.log(hash(value));
      console.log("Token : " + token);
      const hashedCode = hash(value);
      const res = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? apiurl
            : "https://server.funcbox.in"
        }/codesave/save`,
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",

            token: token,
          },
          body: JSON.stringify({
            gid: gid,
            uid: userid,
            code: hashedCode,
          }),
        }
      );
      const response = await res.json();
      if (!res) {
        toast.error("Server error");
      }
      if (response.message === "saved") {
        toast.success("Your Code is saved", {
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      } else {
        toast.error(response.message, {
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      }
    } else {
      console.error("Error game not found");
      toast.error("Game not Found", {
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
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
