import React from "react";
import { Link } from "react-router-dom";
import "./Ribbon.css";
function Ribbon({ children, color }) {
  return (
    <div className="ribbon" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

export default Ribbon;
