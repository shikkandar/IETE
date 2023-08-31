import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
export const HomeSvg = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);
  const welcomeText = 'earning Today,';
  const characters = welcomeText.split('');
  
  const welcomeText1 = 'eading Tomorrow';
  const characters1 = welcomeText1.split('');
  

  return (
    <div className='home-main'>
      <div className="home-main-con">
        <div className="le-ld">
          L
          <div className="le-ld-con">
            <div className="le-ld-text1">
            {characters.map((char, index) => (
            <span key={index} className="highlight" style={{ animationDelay: `${(index + 1) * 0.07}s` }}>
              {char}
            </span>
          ))}
            </div>
            <div className="le-ld-text2">
            {characters1.map((char, index) => (
            <span key={index} className="highlight" style={{ animationDelay: `${(index + 1) * 0.07}s` }}>
              {char}
            </span>
          ))}
            </div>
          </div>
        </div>
        <div className="up-text" data-aos="zoom-in-down" >
          
          UPCOMING EVENTS & UPDATES
        </div>
        <div className="webinar-text-con" data-aos="zoom-in-down">
          <div className="webinar-text">
            <div className="webinar-text-date">
              30<br />May
            </div>
            <div className="webinar-text-event" >
              <a href="/Events">
                Webinar on IoT Security<br />
                (WISE-2022) organized by SETS Chennai & C-DAC Hyderabad in collaboration with ISEA
              </a>
              <link rel="stylesheet" href="" ></link>
            </div>
          </div>
        </div>
      </div>
      <img className='home-main-svg' src='/img/svg/undraw_work_chat_re_qes4.svg' alt='home-svg' data-aos="slide-left"/>
    </div>
  );
};
