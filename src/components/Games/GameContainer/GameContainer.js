import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import "./GameContainer.css";

function GameContainer({ gid, location }) {
  const [js, setJs] = useState();
  const [srcDoc, setSrcDoc] = useState("");
  const { isAuthenticated, token, userid } = useAuth();
  const [gAccess, setGAccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [qrSrc, setQrSrc] = useState("");
  const dispatch = useDispatch();
  const path = location;
  const gamePath = filepath[gid];
  const history = useHistory();
  const apiurl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    console.log(location);
  }, [location]);
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
      if (!gres) {
        toast.error("Server Error");
        history.push("/");
      } else {
        console.log(gres);
      }
      const gaccess = await gres.json();
      // let gaccess = {
      //   token: "token",
      //   gAcess: true,
      // };
      // console.log("gAccess = ", gaccess);
      if (gaccess === "Not Authorize 1") {
        toast.error("You are not logged in!", { pauseOnHover: false });
        history.push({ pathname: "/login", state: { prev: location } });
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

    QRCode.toDataURL("https://www.funcbox.in/" + userid + "+" + gid).then(
      setQrSrc
    );
  }, [userid]);

  const [showSteps, setShowSteps] = useState(false);

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
        <div className="heading">
          <p>Preview</p>
        </div>

        <div className="frame_container">
          <div className="phone">
            <div
              className="showStepsScreen"
              style={{ display: showSteps ? "block" : "none" }}
            >
              <div className="innerDiv">
                <div className="showStepsScreen_header">
                  <h2>STEPS</h2>
                </div>

                <div className="showStepsScreen_body">
                  <span>1. First do this step like this and this and this</span>
                  <br />
                  <span>
                    2. Next do this step by making this go inside this
                  </span>
                  <br />
                  <span>3. Slowly do this step without any hesistation</span>
                  <br />
                  <span>
                    4. Then do this hard step by letting yourself free
                  </span>
                  <br />
                  <span>5. Finally do this step to win the game</span>
                  <br />
                </div>

                <div
                  className="closeStepsIcon"
                  onClick={() => setShowSteps(false)}
                >
                  <img
                    src="https://ik.imagekit.io/funcboxImages/Group_53_uHdtPJH0t1e.png"
                    alt="close"
                  />
                </div>
              </div>
            </div>

            <div
              className="steps_icon"
              onClick={() => setShowSteps(true)}
              style={{ display: !showSteps ? "block" : "none" }}
            >
              <div className="click_here_to_view_steps">
                <span>Click here to view Steps</span>
              </div>

              <div className="steps_icon_list">
                <img
                  src="https://ik.imagekit.io/funcboxImages/Group_52__5__fDyu-t9Fnmt.png"
                  alt="steps"
                />
              </div>

              <img
                src="https://ik.imagekit.io/funcboxImages/Group_51__1__MmDF8JqR_01.png"
                alt="steps"
              />
            </div>

            <Frame srcDoc={srcDoc} />
          </div>
        </div>
        <div className="back_btn">
          <Link to="/Welcome">
            <button>Go Back</button>
          </Link>
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
