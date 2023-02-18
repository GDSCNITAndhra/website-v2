import React, { useEffect, useState } from "react";
export default function Landing(props) {
   const [opacity, setOpacity] = useState(props.opacity);

  useEffect(() => {
    // Define the function that will update the opacity on scroll
    function handleScroll() {
      const newOpacity = 1 - window.scrollY / window.innerHeight;
      setOpacity(newOpacity);
    }

    // Add the event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   
      <img src={props.src} alt="My Image" style={{ opacity: opacity ,width:"100vw",marginTop:"0px",paddingTop:"0px",alignContent:"start",justifyContent:"center"}} />

  );
}