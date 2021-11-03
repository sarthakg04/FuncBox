import React, { useState, useEffect } from "react";
import { filepath } from "../../gameFilePath";
import Frame from "../Frame/Frame";
import { getGameId } from "../../features/gamesList";
import { unhash } from "../../features/hasher";
export default function Preview(props) {
  const [js, setJs] = useState("");
  const code = props.match.params.code.split("+");

  const [srcDoc, setSrcDoc] = useState("");
  const [token, setToken] = useState(code[0]);
  const [gid, setGid] = useState(code[1]);
  const path = filepath[gid];
  useEffect(() => {
    var data = "";
    const asyncFunc = async () => {
      data = await getGameId("ColorGame");
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("gid " + data.gid);
        setGid(data.gid);
      }
    };

    asyncFunc();
  }, []);
  useEffect(() => {
    const getSavedCode = async () => {
      const res = await fetch(`http://localhost:5000/codesave/save/${gid}`, {
        method: "GET",
        headers: {
          token: token,
        },
      });
      const data = await res.json();
      const len = data.length - 1;
      console.log(unhash(data[len].code));
      setJs(unhash(data[len].code));
    };
    if (gid > -1) {
      getSavedCode();
    }
  }, [gid]);
  function updateCode() {
    setSrcDoc(`
          <!DOCTYPE html>
          <html>

          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Whack A Mole</title>
              <link rel="stylesheet" href="FuncBox/${path}/style.css">
              <link rel="stylesheet" href="./${path}/style.css">
          </head>

          <body>
              <script src='FuncBox/${path}/script.js'></script>
              <script src='./${path}/script.js'></script>
              <script>${js}</script>

          </body>

          </html>
        `);
  }

  useEffect(() => {
    updateCode();
  }, [js]);

  return (
    <div>
      <div className="preview__container" style={{ marginTop: "32px" }}>
        <div className="preview">
          <div className="frame_container">
            <div className="phone">
              <Frame srcDoc={srcDoc} />
              {/* <iframe
                          srcDoc={srcDoc}
                          title="output"
                          sandbox="allow-scripts"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                      /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
