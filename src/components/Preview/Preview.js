import React, { useState, useEffect } from "react";
import { filepath } from "../../gameFilePath";
import Frame from "../Frame/Frame";
import { getGameId } from "../../features/gamesList";
import { unhash } from "../../features/hasher";
import useAuth from "../../hooks/useAuth";
import "./Preview.css";
export default function Preview(props) {
  const [js, setJs] = useState("");
  const code = props.match.params.code.split("+");

  const [srcDoc, setSrcDoc] = useState("");
  const [userid, setUserId] = useState(code[0]);
  const [username, setUsername] = useState("");
  const [gid, setGid] = useState(code[1]);
  const path = filepath[gid];
  const apiurl = process.env.REACT_APP_API_URL;
  useEffect(() => {
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
        console.log(unhash(data[len].code));
        setJs(unhash(data[len].code));
      }
    };

    if (gid > -1 && userid !== "") {
      getSavedCode();
    }
  }, [userid, gid]);
  function updateCode() {
    setSrcDoc(`
          <!DOCTYPE html>
          <html>

          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Whack A Mole</title>
              <link rel="stylesheet" href="/${path}/style.css">
              <link rel="stylesheet" href="./${path}/style.css">
          </head>

          <body>
              <script src='/${path}/script.js'></script>
              <script src='./${path}/script.js'></script>
              <script>${js}</script>

          </body>

          </html>
        `);
  }

  useEffect(() => {
    const getUsername = async () => {
      const res = await fetch(
        `https://server.funcbox.in/admindashboard/username/${userid}`
      );
      const data = await res.json();
      if (data !== "error") setUsername(data[0].fname);
    };

    updateCode();
    if (js.length > 0) getUsername();
  }, [js]);

  return (
    <div className="game_preview">
      <Frame srcDoc={srcDoc} />
      {/* <iframe
                          srcDoc={srcDoc}
                          title="output"
                          sandbox="allow-scripts"
                          frameBorder="0"
                          width="100%"
                          height="100%"
                      /> */}
      {js.length > 0 ? (
        <p>
          Made By <span className="strong">{username}</span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
