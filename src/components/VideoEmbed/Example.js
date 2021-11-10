import React from "react";
import VideoEmbed from "./VideoEmbed";
function Example() {
  return (
    <div>
      <VideoEmbed
        title="FuncBox : Introducing Coding for Kids"
        color="#fff"
        backgroundColor="#000"
      >
        <iframe
          width="700"
          height="450"
          src="https://www.youtube.com/embed/z7vJJRYMew4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </VideoEmbed>
    </div>
  );
}

export default Example;
