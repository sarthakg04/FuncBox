import React, { useState, useEffect } from "react";
import Editor from "../../Editor/Editor";
import Frame from "../../Frame/Frame";
import useLocalStorage from "../../../hooks/useLocalStorage";
import gamesList, { getGameId } from "../../../features/gamesList";
import QRCode from "qrcode";
import { filepath } from "../../../gameFilePath";
import { useDispatch } from "react-redux";
import { setToken } from "../../../auth/authslice";
import useAuth from "../../../hooks/useAuth";
import { unhash } from "../../../features/hasher";
import { useHistory } from "react-router-dom";
export default function ColorFun() {
  const [js, setJs] = useState();
  const [srcDoc, setSrcDoc] = useState("");
  const { isAuthenticated, token } = useAuth();
  const [gAccess, setGAccess] = useState(true);
  const [gid, setGid] = useState(-1);
  const [qrSrc, setQrSrc] = useState("");
  const { userid } = useAuth();
  const dispatch = useDispatch();
  const gamePath = filepath[11];
  const history = useHistory();
  function toggleQr() {
    document.getElementById("qr").classList.toggle("active");
  }
  useEffect(() => {
    setGAccess(isAuthenticated);
  }, [isAuthenticated]);
  useEffect(() => {
    const getSavedCode = async () => {
      const res = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? "https://server.funcbox.in"
            : "http://localhost:5000"
        }/codesave/save/${userid}/game/${gid}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      const len = data.length - 1;
      console.log(unhash(data[len].code));
      setJs(unhash(data[len].code));
    };
    if (gid > -1 && userid !== "") {
      getSavedCode();
    }

    async function checkGameAccess() {
      const gres = await fetch(
        `${
          process.env.NODE_ENV === "production"
            ? "https://server.funcbox.in"
            : "http://localhost:5000"
        }/gameAccess`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            token: token,
            gid: gid,
          },
        }
      );
      const gaccess = await gres.json();
      dispatch(setToken({ token: "Bearer " + gaccess.token }));
      setGAccess(gaccess.gAcess);
      console.log(gaccess);
    }
    if (isAuthenticated) checkGameAccess();

    QRCode.toDataURL("http://localhost:3000/" + userid + "+" + gid).then(
      setQrSrc
    );
  }, [userid, gid]);
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

  return !gAccess ? (
    <div> Not authorized</div>
  ) : (
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
