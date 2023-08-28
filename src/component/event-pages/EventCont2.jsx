import React from 'react';
import '../../css/event.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const EventCon2 = () => {
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
   <div className='event2-con'>
     <div className="event2-con1">
        <div className="event2-con1-bold">
             IETE CHENCON 2022 - Call for Papers
        </div>
        <div className="event2-con1-gray">
             Hybrid Mode- MAY 20 & 21, 2022
        </div>
        <div className="event2-con1-normal">
             "International Conference on Power of Artificial Intelligence and Machine Learning for Human Empowerment"
        </div>
        <div className="btn-collection">
            <button className='btn-blue'>Pdf Brochure</button>
            <button className='btn-blue'>Inaugural Session Programme</button>
            <button className='btn-blue'>ChenCon 2022 Proceedings</button>
        </div>
        <div className="line"></div>
         <div className="event2-con1-scope">
         <div className="event2-con1-orange">
            Scope of the Conference
        </div>
        <div className="event2-con1-gray-1">
        Recently, the use of AI/ML technology has been exponentially increasing in our daily lives. AI/ML applications represent an important evolution in computer science and data processing that is quickly transforming a vast array of domains. IETE CHENCON 2022 provides vibrant opportunities for the delegates to exchange new ideas, applications, practical challenges encountered and to leverage AI and ML technologies. The technical program of the conference will consist of invited key note talks and paper presentations. IETE CHENCON 2022 accepts technical paper presentation from research scholars, faculty, students and industry professionals in emerging areas of AI and ML applications but not limited to:
        </div>
         </div>
     </div>
     
       
   </div>
  )
}
