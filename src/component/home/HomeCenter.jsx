import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const HomeCenter = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);
  return (
    <div className='homecenter-con'>
       <div className="homecenter-con-text" data-aos="slide-up">
            <div className="homecenter-con-text-head">
                "INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF OUR NEW INDIA"
            </div>
            <div className="homecenter-con-text-content">
                - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
            </div>
            <div className="homecenter-con-text-content1">
                Chennai Centre of IETE is committed to attain commanding heights and achieve the status of “Centre of Excellence” in Technical, Engineering & Management education by harnessing the best practices in educational innovation and through its concerted endeavors like quality teaching, industrial consultancy and training to the aspirants including corporate training.
            </div>
            <button className='read-btn'>Read More</button>
       </div>
    </div>
  )
}
