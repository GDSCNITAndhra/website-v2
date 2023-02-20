import React from "react";

export default function () {
    let topstyle = {
        display:"flex",
        flexDirection:"column",
        backgroundColor:"grey"
    }
  return (
    <div style={topstyle}>
      <h1>
        <span id="1" style={{ color: "blue" }}>
          G
        </span>
        <span id="2" style={{ color: "red" }}>
          a
        </span>
        <span id="3" style={{ color: "yellow" }}>
          l
        </span>
        <span id="4" style={{ color: "blue" }}>
          l
        </span>
        <span id="5" style={{ color: "green" }}>
          e
        </span>
        <span id="6" style={{ color: "red" }}>
          r
        </span>
        <span id="7" style={{ color: "blue" }}>
          y
        </span>
      </h1>
      <div >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis
        possimus repellendus aut reiciendis tempore iusto sapiente debitis rerum
        accusantium temporibus cumque quos, minima fugiat officia nostrum modi,
        asperiores fugit?
      </div>
    </div>
  );
}
