import React, { useState, useEffect } from "react";
import Editor from "../../Editor/Editor";
import Frame from "../../Frame/Frame";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { getGameId } from "../../../features/gamesList";
export default function ColorFun() {
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  const [gid, setGid] = useState(-1);
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
  function updateCode() {
    setSrcDoc(`

            <html>

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Whack A Mole</title>
                <link rel="stylesheet" href="FuncBox/ColorFunGameFiles/style.css">
                <link rel="stylesheet" href="./ColorFunGameFiles/style.css">
            </head>

            <body>
                <script src='FuncBox/ColorFunGameFiles/script.js'></script>
                <script src='./ColorFunGameFiles/script.js'></script>
                <script>${js}</script>
            </body>

            </html>

        `);
  }

  return (
    <div>
      <div className="main__container">
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
          updateCode={updateCode}
          gid={11}
        />
        <div className="preview">
          <div class="heading">
            <p>Preview</p>
          </div>
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
