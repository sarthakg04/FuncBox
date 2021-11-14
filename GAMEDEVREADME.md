# Game Dev Guide

## Step 1: Setting up the Game

- Add the Game to the games db through admin panel if not already added
- In the `public`folder add a folder with the naming convention `<game-name>GameFiles`
- Open the `gameFilePath.js` file and in the `filepath` json put the name of the folder that you created in the `public` directory corresponding to the game id that is available in the games page in admin panel
- In the `src/components/Games` folder create a folder for the game and create a `.js` file (Example : `"CalculatorGame/CalculatorGame.js"`)
- Copy this piece of code into the `.js` file
  Change the `<game-name>` to the **name of the game that you put in the database through admin panel**
  Change `<game-id>` with the game id 

```
import React, { useState, useEffect } from "react";
import Editor from "../../Editor/Editor";
import Frame from "../../Frame/Frame";
import QRCode from "qrcode";
import { filepath } from "../../../gameFilePath";
import { useDispatch } from "react-redux";
import { setToken } from "../../../auth/authslice";
import useAuth from "../../../hooks/useAuth";
import { unhash } from "../../../features/hasher";
import { useHistory } from "react-router-dom";
import GameUnAuthorized from "../../GameUnAuthorized/GameUnAuthorized";
export default function <filr-name>() {
  const [js, setJs] = useState();
  const [srcDoc, setSrcDoc] = useState("");
  const { isAuthenticated, token, userid } = useAuth();
  const [gAccess, setGAccess] = useState(false);
  const gid = <game-id>;
  const [qrSrc, setQrSrc] = useState("");
  const dispatch = useDispatch();
  const gamePath = filepath[gid];
  const history = useHistory();


  function toggleQr() {
    document.getElementById("qr").classList.toggle("active");
  }

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
      if (data) {
        const len = data.length - 1;
        if (len > 0) setJs(unhash(data[len].code));
      }
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
  }, [userid]);

  function updateCode() {
    setSrcDoc(`

            <html>

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title><game-name></title>
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

  return !gAccess || !isAuthenticated ? (
    <div>
      <GameUnAuthorized />
    </div>
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

```

- In the `App.js` file:
  - import the component that you created in the `src/components` directory
  - inside the `Router` add a `Route Component` \
    Example: `<Route path="/<game-url>" conponent={<component-name>}/>`
- Now make sure your game can be visited on the route you created(make sure to start the local server)

## Step 2 : Coding the game

- Inside the folder that you created in the `public` directory create these files or folders

  - `script.js`
  - `style.css`
  - `assets` folder

- Start writing your **code** in the the `script.js`
- Write **styles** in `style.css`
- **Images** should be kept in `imagekit.io` in `.png` format
