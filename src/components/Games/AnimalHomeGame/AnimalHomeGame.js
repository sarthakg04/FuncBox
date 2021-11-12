import React, { useState, useEffect } from "react";
import Editor from "../../Editor/Editor";
import Frame from "../../Frame/Frame";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { getGameId } from "../../../features/gamesList";
import QRCode from "qrcode";
import { filepath } from "../../../gameFilePath";
import useAuth from "../../../hooks/useAuth";
export default function AnimalHomeGame() {
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  const [token, setToken] = useState("");
  const [gid, setGid] = useState(-1);
  const [qrSrc, setQrSrc] = useState("");
  const { userid } = useAuth();
  const gamePath = filepath[25];
  function toggleQr() {
    document.getElementById("qr").classList.toggle("active");
  }
  useEffect(() => {
    QRCode.toDataURL("http://localhost:3000/" + userid + "+" + gid).then(
      setQrSrc
    );
  }, [userid, gid]);
  useEffect(() => {
    var data = "";
    const asyncFunc = async () => {
      data = await getGameId("AnimalHomeGame");
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
        <link rel="stylesheet" href="/${gamePath}/style.css"}>
        <link rel="stylesheet" href="./${gamePath}/style.css">
    </head>

    <body>
        <script src='/${gamePath}/script.js'></script>
        <script src='./${gamePath}/script.js'></script>
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
          gid={gid}
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
        <div className="qr_body" id="qr">
          <div className="qr_container">
            <div className="heading">
              <h1>Scan to Share</h1>
            </div>
            <div className="qr_code">
              <img src={qrSrc} alt="" />
            </div>
            <a href="javascript:void(0)" className="closeQr" onClick={toggleQr}>
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
