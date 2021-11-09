import React from "react";
import "./VideoEmbed.css";
function VideoEmbed({ title, children, color }) {
    
  return (
    <div className="video_embed">
      {children}
      <p style={{ color: color, textAlign: "center" }}>{title}</p>
    </div>
  );
}

export default VideoEmbed;
