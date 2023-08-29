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
  return (
    <div className='member-con'>
       <div className="head-text">
            Why join us?
       </div>
       <div className="content-text">
            IETE Student Forum arranges frequent meetings of student members together with experts / academic / R & D / industry leaders as well as IETE centre’s executive 
            committee members. Programmers of common interest may also be arranged involving students forum at many institutions in a city, region etc. Students after 
            completeing their degrees will become proud corporate members of IETE and can write after their name BE. AMIETE, with less fees (deducting the fee paid for the forum).
       </div>
       <MemberCards/>
    </div>
  )
}
