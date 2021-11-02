import React, { useState , useEffect } from 'react';
import Editor from '../../Editor/Editor';
import Frame from '../../Frame/Frame';
import useLocalStorage from '../../../hooks/useLocalStorage';
import QRCode from 'qrcode';

export default function HitIt() {
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  const [userName , setUserName] = useState('nishant');
  const [gameId , setGameId] = useState('TrashGame');
  const [qrSrc , setQrSrc] = useState('');
  function toggleQr(){
    document.getElementById('qr').classList.toggle('active');
  }
  useEffect(()=>{
    QRCode.toDataURL('https://funcbox.in/'+userName+"+"+gameId).then(setQrSrc);



  },[]);
    function updateCode(){
        setSrcDoc(`
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Whack A Mole</title>
                <link rel="stylesheet" href="FuncBox/${gameId}Files/style.css">
                <link rel="stylesheet" href="./${gameId}Files/style.css">
            </head>

            <body>
                <script src='FuncBox/${gameId}Files/script.js'></script>
                <script src='./${gameId}Files/script.js'></script>
                <script>${ js }</script>
            </body>

            </html>

        `)
    }

    return (
      <div>
        <div className="main__container">
          <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setJs}
              updateCode = {updateCode}

          />
        <div className="preview">
          <div class="heading">
          <p>Preview</p>
          </div>
          <div className="frame_container">
              <div className='phone'>
                  <Frame srcDoc={srcDoc}/>
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
    )
}
