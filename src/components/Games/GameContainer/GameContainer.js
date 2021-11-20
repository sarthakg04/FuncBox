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
import GameUnAuthorized from "../../GameUnAuthorized/GameUnAuthorized";
import { toast } from "react-toastify";
function GameContainer({ gid }) {
  const [js, setJs] = useState();
  const [srcDoc, setSrcDoc] = useState("");
  const { isAuthenticated, token, userid } = useAuth();
  const [gAccess, setGAccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrSrc, setQrSrc] = useState("");
  const dispatch = useDispatch();
  const gamePath = filepath[gid];
  const history = useHistory();
  const apiurl = process.env.REACT_APP_API_URL;
  function toggleQr() {
    document.getElementById("qr").classList.toggle("active");
  }

  function updateCode() {
    setSrcDoc(`

            <html>

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Color Fun</title>
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
  useEffect(() => {
    async function checkGameAccess() {
      const gres = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? apiurl
            : "https://server.funcbox.in"
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
      //   if (!gres) {
      //     toast.error("Server Error");
      //     history.push("/");
      //   } else {
      //     console.log(gres);
      //   }
      // const gaccess = await gres.json();
      let gaccess = {
        token: "token",
        gAcess : true
      }
      console.log("gAccess = ", gaccess);
      if (gaccess === "Not Authorize 1") {
        toast.error("You are not logged in!", { pauseOnHover: false });
        history.push("/login");
      }

      dispatch(setToken({ token: "Bearer " + gaccess.token }));
      if (gaccess.token && gaccess.gAcess === false) {
        toast.error("You are not allowed to access this game", {
          pauseOnHover: false,
        });
        history.push("/");
      }
      setGAccess(gaccess.gAcess);
      console.log(gaccess);
    }
    checkGameAccess();

    const getSavedCode = async () => {
      const res = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? apiurl
            : "https://server.funcbox.in"
        }/codesave/save/${userid}/game/${gid}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      if (data) {
        const len = data.length - 1;
        if (len > 0) setJs(unhash(data[len].code));
      }
      setLoading(false);
    };
    if (gid > -1 && userid !== "") {
      getSavedCode();
    }

    QRCode.toDataURL(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/"
          : "https://www.funcbox.in/"
      }` +
        userid +
        "+" +
        gid
    ).then(setQrSrc);
  }, [userid]);
  return loading ? (
    <div> Loading ...</div>
  ) : (
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
  );
}

export default GameContainer;
