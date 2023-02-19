import React, { useState } from 'react'
import styles from "./event.module.css"
import Upcoming from './Upcoming'
export default function EventWork() {
  const [but,changecls] = useState("upcoming")
  const changeCard = ()=>{
    if(but=="upcoming") changecls("past");
    else if(but=="past") changecls("upcoming")
  }
  return (
    <div id={styles.EventWork}>
        <h2 style={{fontFamily:""}}>
            Events & Workshops
        </h2>
        <h3>
            Connect with us and explore!!!
        </h3>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
        <label className="btn btn-outline-primary" for="btnradio1" onChange={changeCard}>Radio 1</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
        <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>
        
        <div className={but}>
          {but=="upcoming"?<Upcoming/>:<Past/>}
        </div>
        

    </div>
  )
}
