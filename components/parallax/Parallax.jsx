import React, { useState, useEffect } from "react";
// import "./styles.css";

function Parallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax" style={{ transform: `translateY(${offset * 0.5}px)` }}>
      
    </div>
  );
}

export default Parallax;
