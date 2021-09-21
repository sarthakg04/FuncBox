import React, { useState } from 'react';
import Editor from '../../Editor/Editor';
import Frame from '../../Frame/Frame';
import useLocalStorage from '../../../hooks/useLocalStorage';
import Navbar from '../../Navbar/Navbar';

const AngryBirds = () => {
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    function updateCode(){
        setSrcDoc(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Document</title>
                <link rel="stylesheet" href="FuncBoxx/AngryBirds/style.css">
            </head>
            <body>
            </body>
            <script src="FuncBoxx/AngryBirds/script.js"></script>
            <script>${ js }</script>
            </html>
        `)
    }


    return (
      <div>
      {/* <Navbar/> */}
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
      </div>
      </div>
    )
}

export default AngryBirds;
