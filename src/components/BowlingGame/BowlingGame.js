import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Frame from '../Frame/Frame';
import useLocalStorage from '../../hooks/useLocalStorage';
import Navbar from '../Navbar/Navbar';

const BowlingGame = () => {
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
                <title>BowlingGame</title>
                <link rel="stylesheet" href="FuncBoxx/BowlingGameFiles/style.css">
            </head>

            <body>

                <script src='FuncBoxx/BowlingGameFiles/scripts.js'></script>
                <script>${ js }</script>
            </body>

            </html>

        `)
    }


    return (
    <div>
    <Navbar/>
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

export default BowlingGame;
