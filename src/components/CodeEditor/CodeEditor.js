import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import "./CodeEditor.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import Frame from "../Frame/Frame";
import Editor from "../Editor/Editor";
import Navbar from "../Navbar/Navbar";

export default function CodeEditor() {
	const [js, setJs] = useLocalStorage("js", "");
	const [srcDoc, setSrcDoc] = useState("");
	const [userName, setUserName] = useState("nishant");
	const [gameId, setGameId] = useState("3");
	const [qrSrc, setQrSrc] = useState("");

	useEffect(() => {
		QRCode.toDataURL("https://funcbox.in/" + userName + "+" + gameId).then(
			setQrSrc
		);
	}, []);

	function toggleQr() {
		document.getElementById("qr").classList.toggle("active");
		console.log("Hello");
	}

	function updateCode() {
		setSrcDoc(`
        <html>
        <head>
        <title>
        </title>
        <link rel="stylesheet" href="FuncBoxx/sstyles.css">
        </head>
        <body>
        <div id="main__body">

        </div>
        <script src="FuncBoxx/scripts.js"></script>
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
