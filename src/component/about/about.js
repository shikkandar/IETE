import '../../css/about.css'
import { AboutCenter } from './AboutCenter';
import { AboutNum } from './AboutNum';
import { AboutIcon } from './AboutIcon';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function About(){
  useEffect(() => {
    AOS.init(); 
  }, []);
    const welcomeText = `Founded in 1953, the Institution of Electronics and Telecommunication Engineers (IETE) is a leading professional society. Its vision is to reach the unreached and empower the youth through Technical Education and Skill development with a Mission for Advancement of Electronics, Telecommunication, Information Technology & other related disciplines; to contribute in Nation's Human Resource & Infrastructure Development through our Engineers & Scientists. The Government of India, Ministry of Science and Technology, Department of Scientific & Industrial Research has recognized IETE as a Scientific and Industrial Research Organization (SIRO). The Institution has also been notified as an Educational Institution of National Eminence by the Government of India. IETE is governed by its elected Governing Council headed by an elected President. It has on its roll the Secretary General – the head of IETE Secretariat as Chief Executive. The Institution is managed through various Committees and Boards nominated by the Governing Council. The 63 Centers are spread all over India 02 abroad and are managed by respective Executive Committees. To keep pace with technological development and achieve the mission, it organizes conferences, conventions, symposia, seminars, workshops, publications and brain storming sessions for continued knowledge upgradation of its members.`;
    const characters = welcomeText.split('');
   
    return (
     <div className="admissin-con">
           <div className="ug-cards">
        <div className="builders-card-con">
          <div className="shik">
            <div className="content">
              <h2>IETE</h2>
              {characters.map((char, index) => (

                <span key={index} className="about-text" style={{ animationDelay: `${(index + 1) * 0.003}s` }}>
              {char}
            </span>
          ))}
              
            </div>
          </div>
        </div>
        <img className="admission-svg" src="/img/svg/undraw_connected_world_wuay.svg" alt="" width="50%" />
      </div>
      <AboutCenter/>
      <AboutNum/>
      <AboutIcon/>
    
     </div>
  
    )
}
export default About;