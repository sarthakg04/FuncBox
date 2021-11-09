import React from "react";
import "./VideoEmbed.css";
function VideoEmbed({ title, children, color, backgroundColor }) {
  return (
    <div
      className="video_embed"
      style={{ backgroundColor: backgroundColor || "#000" }}
    >
      {children}
      <p style={{ color: color || "#fff", textAlign: "center" }}>{title}</p>
    </div>
  );
}

export default VideoEmbed;
