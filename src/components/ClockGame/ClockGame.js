import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Frame from '../Frame/Frame';
import useLocalStorage from '../../hooks/useLocalStorage';
import Navbar from '../Navbar/Navbar';

const ClockGame = () => {
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
                <title>ClockGame</title>
                <link rel="stylesheet" href="FuncBoxx/ClockGameFiles/style.css">
            </head>

            <body>
              
                <script src='FuncBoxx/ClockGameFiles/scripts.js'></script>
                <script>${ js }</script>
            </body>

            </html>

        `)
    }


    return (
    <div>
    <Navbar/>
    <button onClick={updateCode} className="compile-button" >Run</button>
        <div className="top-pane">
            <Editor
                language="javascript"
                displayName="JS"
                value={js}
                onChange={setJs}
            />
            <div className="frame_container">
                    <div className='phone'>
                        <Frame srcDoc={srcDoc}/>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default ClockGame;
