import React from "react";
import VideoEmbed from "./VideoEmbed";
function Example() {
  return (
    <div>
      <VideoEmbed title="FuncBox" color="#fff">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0SZnFt1oAEc"
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
