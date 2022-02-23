import React from "react";
import VideoEmbed from "./VideoEmbed";
function Example() {
  return (
    <div>
      <VideoEmbed color="#fff" backgroundColor="#fff">
        <div class="video_container">
          <iframe
            class="responsive-iframe"
            src="https://www.youtube.com/embed/J8dkPzLnYys"
            title="FuncBox"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </VideoEmbed>
    </div>
  );
}

export default Example;
