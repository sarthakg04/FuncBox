import React from "react";

function ServerTest() {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch("https://server.funcbox.in/");
          const data = await res.json();
          console.log(data);
        }}
      >
        GET
      </button>
    </div>
  );
}

export default ServerTest;
