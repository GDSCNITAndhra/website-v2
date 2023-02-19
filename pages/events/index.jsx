import React, { useState } from 'react'
import styles from "./event.module.css"
import Upcoming from './Upcoming'
import Past from './Past'
import { useEffect } from 'react'

export default function EventWork() {
  const [but,changebut] = useState(true);
  const [opacity, setOpacity] = useState(0);
  // const [pos,setpos] = useState("absolute")
  useEffect(() => {
    // Define the function that will update the opacity on scroll
    function handleScroll() {
      const newOpacity =  window.scrollY / window.innerHeight;
      setOpacity(newOpacity);
    }

    // Add the event listener for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return(
    <div style={{marginTop:"30vh",zIndex:20, opacity:opacity}}>
        <h2 >
            Events & Workshops
        </h2>
        <h3>
            Connect with us and explore!!!
        </h3>
        <button id={styles.but1} className="button" onClick={()=>{changebut(false)}}>Upcoming Events</button>
        <button id={styles.but2} className="button" onClick={()=>{changebut(true)}}>Past Events</button>
        <div>
            {
              but?<Past/>:<Upcoming/>
            }
        </div>
   </div>
    
  )
}
        

