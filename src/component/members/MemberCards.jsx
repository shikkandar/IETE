import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const MemberCards = () => {
   useEffect(() => {
      AOS.init(); 
    }, []);
  return (
   <>
       <div className='members-con'>
            <img className='members-con-svg members-con-svg-1' src="/img/svg/undraw_working_re_ddwy (1).svg" alt="" data-aos='zoom-in-up' />
          <div className="members-con1" data-aos='zoom-in-up'>
            <div className='mem-head'>
               MEMBERSHIP
            </div>
            <div className="mem-con">
               The IETE membership is available at different levels based on the applicants' academic qualifications and practical experience in electronics, telecommunications, computers, information technology and related areas. Applicants are invited to seek the highest membership grade they are qualified for. The membership categories are:
            </div>
          </div>
          <img className='members-con-svg members-con-svg-2' src="/img/svg/undraw_working_re_ddwy (1).svg" alt="" data-aos='zoom-in-up' />
       </div>
       <div className='members-con'>
          <img className='members-con-svg' src="/img/svg/undraw_team_spirit_re_yl1v (1).svg" alt="" data-aos='zoom-in-up'/>
          <div className="members-con1" data-aos='zoom-in-up' >
          <div className='mem-head'>
               Corporate Members:
            </div>
            <div className="mem-con">
               1.Honorary fellow (HF) (elected),<br/>
               2.Distinguished Fellow (DF) (elected),<br/>
               3.Fellow (F),<br/>
               4.Member (M),<br/>
               5.Associate member (AM)
            </div>
            <div className="mem-con1">
                   Click here to learn more about the Eligibility Criteria and other details
            </div>
            <div className="mem-btn">
                 <div className="mem-button">
                     &gt;
                 </div>
            </div>
          </div>
       </div>
       <div className='members-con'>
       <img className='members-con-svg members-con-svg-1' src="/img/svg/undraw_good_team_re_hrvm (1).svg" alt="" data-aos='zoom-in-up'/>
       <div className="members-con1" data-aos='zoom-in-up'>
          <div className='mem-head'>
               Non-Corporate Members:
            </div>
            <div className="mem-con">
               6. Associate (A),<br/>
               7. Organisational Member (ORG),<br/>
               8. AMIETE Student (AMIETE),<br/>
               9. DIPIETE Student (DipIETE),<br/>
               10. Diploma Member (DipIETE Passout) (DIP)
            </div>
            <div className="mem-con1">
                  Click here to learn more about the Eligibility Criteria and other details
            </div>
            <div className="mem-btn">
                 <div className="mem-button">
                     &gt;
                 </div>
            </div>
          </div>
          <img className='members-con-svg members-con-svg-2' src="/img/svg/undraw_good_team_re_hrvm (1).svg" alt="" data-aos='zoom-in-up'/>
       </div>
       <div className='members-con'>
          <img className='members-con-svg' src="/img/svg/undraw_switches_1js3.svg" alt="" data-aos='zoom-in-up'/>
          <div className="members-con1" data-aos='zoom-in-up'>
            <div className='mem-head'>
               Click on the link to access the forms:
            </div>
            <div className="mem-con">
                  1.Corporate Member<br/>

                  2.Chartered Engineer<br/>

                  3.Organisational Member<br/>

                  4.AMIETE<br/>

                  5.DIPIETE
            </div>
          </div>
       </div>
   </>
  )
}
