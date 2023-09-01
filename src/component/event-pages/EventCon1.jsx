import React from 'react';
import '../../css/event.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const EventCon1 = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <div className='Event-con'>
      <div className='Event-con1'>
      <div className="Event-con1-text" data-aos='zoom-in-up'>
          Webinar on IoT Security(WISE-2022)
      </div>
      <div className="Event-con1-text" data-aos='zoom-in-up' >
          on 30th May, 2022
      </div>
      <div className="Event-con1-text" data-aos='zoom-in-up'>
          SETS Chennai & C-DAC Hyderabad in collaboration with ISEA
      </div>
      <div className="Event-con1-text" data-aos='zoom-in-up' >
          All interested members are requested to register at the following link to participate in the webinar
      </div>
      <button className='event-btn' data-aos='zoom-in-up'>
          <a href='https://infosecawareness.in/wise2022'>Weblink</a>
      </button>
      <div className="Event-con1-text" data-aos='zoom-in-up' >
          Participation certificate will be issued to all the registered participants after attending all the sessions.
      </div>
    </div>
    </div>
  )
}
