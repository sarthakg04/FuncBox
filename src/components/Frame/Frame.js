import React from 'react'
// import $ from 'jquery'
import './Frame.css'

export default function Frame( props ) {
    
    const srcDoc = props.srcDoc;

    // $('#iframe_id').load(function () {
    //     $(this).height($(this).contents().height());
    //     $(this).width($(this).contents().width());
    // });

    return (
        <div>
            <iframe 
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="535px"
            />
        </div>
    )
}
