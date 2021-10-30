import React from 'react'
// import {Helmet} from "react-helmet";
// import ScriptTag from 'react-script-tag';

import { useEffect } from 'react';


import ReactDOM from 'react-dom';

export default function Privacy() {

    
    useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.enzuzo.com/__enzuzo-privacy-app.js?mode=privacy&apiHost=https://app.enzuzo.com&buttonStyle=%0A%7B%0A%20%20%22buttonWidget%22%3A%20%7B%0A%20%20%20%20%22backgroundColor%22%3A%20%22%23ffffff%22%2C%0A%20%20%20%20%22color%22%3A%20%22%23000000%22%2C%0A%20%20%20%20%22%26%3Ahover%22%3A%20%7B%0A%20%20%20%20%20%20%22backgroundColor%22%3A%20%22%23a4a4a4%22%2C%0A%20%20%20%20%20%20%22color%22%3A%20%22%23000000%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&qt=1635075415682&referral=";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
        document.body.removeChild(script);
    }
    }, []);


    return (
        <>
        
            <script src="https://app.enzuzo.com/__enzuzo-privacy-app.js?mode=privacy&apiHost=https://app.enzuzo.com&buttonStyle=%0A%7B%0A%20%20%22buttonWidget%22%3A%20%7B%0A%20%20%20%20%22backgroundColor%22%3A%20%22%23ffffff%22%2C%0A%20%20%20%20%22color%22%3A%20%22%23000000%22%2C%0A%20%20%20%20%22%26%3Ahover%22%3A%20%7B%0A%20%20%20%20%20%20%22backgroundColor%22%3A%20%22%23a4a4a4%22%2C%0A%20%20%20%20%20%20%22color%22%3A%20%22%23000000%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&qt=1635075415682&referral="></script>
            <div id="__enzuzo-root"></div>
        </>
    )
}

// ReactDOM.render(,document.getElementById('__enzuzo-root'));

