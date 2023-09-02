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
                 <div >
                 <a rel='noreferrer' className="mem-button" target='_blank' href='https://iete.org/index111.html'> &gt;</a>
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
               
                 <div>
                    <a  rel='noreferrer' className="mem-button" target='_blank' href='https://iete.org/index111.html'> &gt;</a>
                 </div>
            </div>
          </div>
          <img className='members-con-svg members-con-svg-2' src="/img/svg/undraw_good_team_re_hrvm (1).svg" alt="" data-aos='zoom-in-up'/>
                </div>
       <div className='members-con'>
          <img className='members-con-svg' src="/img/svg/undraw_switches_1js3.svg" alt="" data-aos='zoom-in-up'/>
          <div className="members-con4" data-aos='zoom-in-up'>
            <div className='mem-head'>
               Click on the link to access the forms:
            </div>
            <div  >
               <a  className="mem-con2" rel='noreferrer'  target='_blank' href='https://iete.org/IETE1_CORPUP.pdf'>1.Corporate Member</a><br/>

                  <a  className="mem-con2"  rel='noreferrer'  target='_blank' href='https://iete.org/CE_Formup.pdf'>2.Chartered Engineer</a><br/>

                  <a  className="mem-con2"  rel='noreferrer'  target='_blank' href='https://iete.org/orgmemup.pdf'>3.Organisational Member</a><br/>

                  <a className="mem-con2"  rel='noreferrer'  target='_blank' href='https://iete.org/AMMEM.pdf'>4.AMIETE</a><br/>

                  <a className="mem-con2"  rel='noreferrer'  target='_blank' href='https://iete.org/DIPMEM.pdf'>5.DIPIETE</a>
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
