import React, { useState } from 'react';
import Editor from '../../Editor/Editor';
import Frame from '../../Frame/Frame';
import useLocalStorage from '../../../hooks/useLocalStorage';

export default function Photosynthesis() {
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    function updateCode(){
        setSrcDoc(`
            <!DOCTYPE html>
            <html>

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Avengers Game</title>
        
                
                <link rel="stylesheet" href="FuncBox/PhotosynthesisGameFiles/style.css">
                <link rel="stylesheet" href="./PhotosynthesisGameFiles/style.css">
            </head>

            <body>
            
                <script src='FuncBox/PhotosynthesisGameFiles/script.js'></script>
                <script src='./PhotosynthesisGameFiles/script.js'></script>

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
      </div>
      </div>
    )
}
