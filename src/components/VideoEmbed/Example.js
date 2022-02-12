import React from "react";
import VideoEmbed from "./VideoEmbed";
function Example() {
  return (
    <div>
      <VideoEmbed
        color="#fff"
        backgroundColor="#000"
      >
        <iframe
          width="700"
          height="450"
          src="https://www.youtube.com/embed/J8dkPzLnYys"
          title="FuncBox"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoEmbed>
    </div>
  );
}

export default Example;
