import React from "react";

function ServerTest() {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch(
            `${
              process.env.NODE_ENV === "production"
                ? "https://server.funcbox.in"
                : "http://localhost:5000"
            }`
          );
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
