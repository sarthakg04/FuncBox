import React, { useState } from 'react';
import Editor from '../Editor/Editor'
import Frame from '../Frame/Frame'
import useLocalStorage from '../../hooks/useLocalStorage'
import Navbar from '../Navbar/Navbar'
import './CodeEditor.css'

export default function CodeEditor() {
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    function updateCode(){
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
    )
}
