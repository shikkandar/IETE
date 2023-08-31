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
            <img className='members-con-svg members-con-svg-1' src="/img/svg/undraw_working_re_ddwy (1).svg" alt=""  />
          <div className="members-con1" data-aos='zoom-in-up'>
            <div className='mem-head'>
               MEMBERSHIP
            </div>
            <div className="mem-con">
               The IETE membership is available at different levels based on the applicants' academic qualifications and practical experience in electronics, telecommunications, computers, information technology and related areas. Applicants are invited to seek the highest membership grade they are qualified for. The membership categories are:
            </div>
          </div>
          <img className='members-con-svg members-con-svg-2' src="/img/svg/undraw_working_re_ddwy (1).svg" alt=""  />
            <svg className='round1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9013fe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            <div className="round3"></div>
            <svg className='heart2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8e986" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
            <svg className='star1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg className='music' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bd10e0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>
       </div>
       <div className='members-con'>
          <img className='members-con-svg' src="/img/svg/undraw_team_spirit_re_yl1v (1).svg" alt="" data-aos='zoom-in-up'/>
          <div className="members-con2" data-aos='zoom-in-up' >
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
       <div className="members-con3" data-aos='zoom-in-up'>
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
          {/* <svg className='round1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#efde0e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <div className="round2"></div>
          <div className="round3"></div>
          <svg className='hexagon1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon></svg>
          <svg className='hexagon2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff1493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon></svg>
          <svg className='heart1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d0021b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <svg className='heart2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8e986" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
          <svg className='star1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <svg className='music' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bd10e0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg> */}
       </div>
       <div className='members-con'>
          <img className='members-con-svg' src="/img/svg/undraw_switches_1js3.svg" alt="" data-aos='zoom-in-up'/>
          <div className="members-con4" data-aos='zoom-in-up'>
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
          <svg className='round1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9013fe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            <div className="round3"></div>
            <svg className='heart2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8e986" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
            <svg className='star1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg className='music' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bd10e0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg>
        </div>
   </>
  )
}
