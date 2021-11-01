import React, { useState , useEffect } from 'react';
import Frame from '../Frame/Frame'


export default function Preview(props) {
    const [js, setJs] = useState(`
      createGamepad()
      fill()
      createElement(['goodrocks','badrocks','wasterocks1','wasterocks2'])
      createScore()
      createGrid()
      createRover("rover")
      draw()
      createInteractionPad()
      createRestartButton()
`)
    const code = (props.match.params.code).split('+')

    const [srcDoc, setSrcDoc] = useState('')
    const [userName , setUserName] = useState(code[0]);
    const [gameId , setGameId] = useState(code[1]);

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

    useEffect(()=>{
      updateCode()
    },[])

    return (
      <div>
            <div className="preview__container" style={{marginTop : '32px'}}>
            <div className="preview">
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
