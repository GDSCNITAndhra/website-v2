import React, { useState } from 'react'
import styles from "./event.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Upcoming from './Upcoming'
import Past from './Past'
import Mou from '@/components/EventWork/Mou';
export default function EventWork() {
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState('upcoming');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  return(
    <div style={{marginTop:"30vh",zIndex:20}}>
        <h2 >
            Events & Workshops
        </h2>
        <h3>
            Connect with us and explore!!!
        </h3>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" value="upcoming" name="btnradio" id="btnradio1" autocomplete="off" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>
          <label class="btn btn-outline-primary" for="btnradio1">Upcoming events</label>

          <input type="radio" class="btn-check" value="past" name="btnradio" id="btnradio2" autocomplete="off" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>
          <label class="btn btn-outline-primary" for="btnradio2">Past Events</label>

          <input type="radio" class="btn-check" value="mou" name="btnradio" id="btnradio3" autocomplete="off" checked={selectedOption === 'option1'} onChange={handleOptionChange}/>
          <label class="btn btn-outline-primary" for="btnradio3">MOUs</label>
        </div>
        <div>
            {
              selectedOption=="upcoming"?<Upcoming/>: selectedOption=="past"?<Past/>:<Mou/>
            }
        </div>
   </div>
    
  )
}
        

