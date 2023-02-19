import React, { useState } from 'react'
import styles from "./event.module.css"
import Upcoming from './Upcoming'
import Past from './Past'
export default function EventWork() {
  const [but,changebut] = useState(true);
  
  return(
    <div style={{marginTop:"30vh",zIndex:20}}>
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
        

