import React from 'react'
import '../../css/members.css'
import { MemberCards } from './MemberCards'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const Members = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);
      const paraEl= "IETE Student Forum arranges frequent meetings of student members together with experts / academic / R & D / industry leaders as well as IETE centre’s executive committee members. Programmers of common interest may also be arranged involving students forum at many institutions in a city, region etc. Students after completeing their degrees will become proud corporate members of IETE and can write after their name BE. AMIETE, with less fees (deducting the fee paid for the forum)";
      const characters3 = paraEl.split('');
  return (
    <div className='member-con'>
       <div className="head-text">
            Why join us?
       </div>
       <div className="content-text">
                  
       {characters3.map((char, index) => (
            <span key={index} className="highlight" style={{ animationDelay: `${(index + 1) * 0.004}s` }}>
              {char}
            </span>
          ))}
           </div>
       
       <MemberCards/>
    </div>
  )
}
