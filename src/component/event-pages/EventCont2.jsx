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
        <div className="event2-con1-bold" data-aos='zoom-in-up'>
             IETE CHENCON 2022 - Call for Papers
        </div>
        <div className="event2-con1-gray" data-aos='zoom-in-up'>
             Hybrid Mode- MAY 20 & 21, 2022
        </div>
        <div className="event2-con1-normal" data-aos='zoom-in-up'>
             "International Conference on Power of Artificial Intelligence and Machine Learning for Human Empowerment"
        </div>
        <div className="btn-collection" >
            <button className='btn-blue'><a target='_blank' href='http://ietechennai.in/assets/pdf/CHENCON2022.pdf'>Pdf Brochure</a></button>
            <button className='btn-blue'><a target='_blank' href='http://ietechennai.in/assets/pdf/chencon_invitation.pdf'>Inaugural Session Programme</a></button>
            <button className='btn-blue'><a target='_blank' href='http://ietechennai.in/assets/pdf/chencon2022_proceedings.pdf'>ChenCon 2022 Proceedings</a></button>
        </div>
        <div className="line"></div>
        <img className='event-img' src="/img/bacgroung/chencon2022.jpeg" alt="img"  / >
        <div className="line" data-aos='zoom-in-up'></div>
         <div className="event2-con1-scope" data-aos='zoom-in-up'>
       
         <div className="event2-con1-orange">
            Scope of the Conference
        </div>
        <div className="event2-con1-gray-1">
        Recently, the use of AI/ML technology has been exponentially increasing in our daily lives. AI/ML applications represent an important evolution in computer science and data processing that is quickly transforming a vast array of domains. IETE CHENCON 2022 provides vibrant opportunities for the delegates to exchange new ideas, applications, practical challenges encountered and to leverage AI and ML technologies. The technical program of the conference will consist of invited key note talks and paper presentations. IETE CHENCON 2022 accepts technical paper presentation from research scholars, faculty, students and industry professionals in emerging areas of AI and ML applications but not limited to:
        </div>
         </div>
         <div className="line"></div>
         <div className="event2-con1-ulcon" >
            <div className="ul-head" data-aos='zoom-in-up'>
              Track - 1: AI Enabled Technologies
            </div>
              <div className="event2-con1-ulcon-ul">
                  <ul data-aos='zoom-in-up'>
                      <li>&#x2714; Advanced Robotics</li>
                      <li>&#x2714; Intelligent Drones and UAVs</li>
                      <li>&#x2714; Natural Language Processing</li>
                      <li>&#x2714; Speech Recognition</li>
                      <li>&#x2714; Image Processing</li>
                  </ul>

                  <ul data-aos='zoom-in-up'>
                      <li>&#x2714; Conversational Systems</li>
                      <li>&#x2714; Image Analysis</li>
                      <li>&#x2714; Computer Vision</li>
                      <li>&#x2714; Face and Gesture Recognition</li>
                      <li>&#x2714; Object Recognition</li>
                  </ul>

                  <ul data-aos='zoom-in-up'>
                      <li>&#x2714; Document Analysis</li>
                      <li>&#x2714; Earth Observation and Visualization</li>
                      <li>&#x2714; Weather and Climate Prediction</li>
                      <li>&#x2714; Localization Techniques</li>
                      <li>&#x2714; Ethical and Responsible AI</li>
                  </ul>
                </div>
         </div>
         <div className="event2-con1-ulcon" >
            <div className="ul-head" data-aos='zoom-in-up'>
                Track - 2: AI/ML Infrastructure
            </div>
              <div className="event2-con1-ulcon-ul">
                  <ul data-aos='zoom-in-up' >
                      <li>&#x2714; Enhanced data visualization</li>
                      <li>&#x2714; Data preparation</li>
                      <li>&#x2714; Data labeling</li>
                      <li>&#x2714; Big data</li>
                      <li>&#x2714; Edge devices</li>
                      
                  </ul>
                  
                  <ul data-aos='zoom-in-up'>
                      <li>&#x2714; Cloud ML platform</li>
                      <li>&#x2714; Digital health and well being</li>
                      <li>&#x2714; Prediction/ Detection of diseases</li>
                      <li>&#x2714; AI for Effective treatment/ therapy</li>
                      <li>&#x2714; 3D imaging and sensing</li>
                      
                  </ul>
                  <ul data-aos='zoom-in-up'   >
                     <li>&#x2714; ML/AI for autonomous systems</li>
                      <li>&#x2714; AI and ML for Healthcare</li>
                      <li>&#x2714; AI and ML Pandemic tracking</li>
                      <li>&#x2714; AI and ML for Virtual learning</li>
                      <li>&#x2714; Physics inspired ML</li>
                  </ul>

                </div>
            </div>
         <div className="event2-con1-ulcon" >
            <div className="ul-head">
            Track - 3: Emerging Applications of Al in Communication
            </div>
              <div className="event2-con1-ulcon-ul">
                    <ul data-aos='zoom-in-up'>
                        <li>&#x2714; AI/ML in the PHY Layer</li>
                        <li>&#x2714; AI and machine learning for 5G</li>
                        <li>&#x2714; Propagation at mm Waves and THertz</li>
                        <li>&#x2714; Beyond 5G & 6G communications</li>
                        <li>&#x2714; New modulation and coding techniques</li>
                       
                    </ul >


                  <ul data-aos='zoom-in-up'>
                        <li>&#x2714; Antenna array processing</li>
                        <li>&#x2714; AI/ML for wireless/optical/satellite networks</li>
                        <li>&#x2714; Reconfigurable Intelligent Surfaces</li>
                        <li>&#x2714; Detection and Localization</li>
                        <li>&#x2714; Radio Network Traffic Prediction</li>
                       
                  </ul>

                  <ul data-aos='zoom-in-up'>
                        <li>&#x2714; Mobility Analytics</li>
                        <li>&#x2714; Smart Communications</li>
                        <li>&#x2714; MIMO and Multi-antenna Beamforming</li>
                        <li>&#x2714; Microwaves and Antenna</li>
                        <li>&#x2714; THz Sensing and Spectrum</li>
                  </ul>
                </div>
         </div>
         <div className="event2-con1-ulcon">
            <div className="ul-head" data-aos='zoom-in-up'>
                  Track - 4: Industry Applications of AI
            </div>
              <div className="event2-con1-ulcon-ul">
                    <ul data-aos='zoom-in-up' >
                        <li>&#x2714; Factory automation</li>
                        <li>&#x2714; Autonomous driving and V2X</li>
                        <li>&#x2714; Internet of Things Analytics</li>
                        <li>&#x2714; Cryptography</li>
                        <li>&#x2714; Energy Management and Analytics</li>

                    </ul>


                  <ul data-aos='zoom-in-up'>
                        <li>&#x2714; Smart farming environments</li>
                        <li>&#x2714; Quantum Computing</li>
                        <li>&#x2714; Cybersecurity</li>
                        <li>&#x2714; Cryptocurrencies</li>
                        <li>&#x2714; Smart Cities Based on loT and AI</li>
                       
                  </ul>

                  <ul data-aos='zoom-in-up'>
                        <li>&#x2714; Industry 4.0</li>
                        <li>&#x2714; Underwater Technologies</li>
                        <li>&#x2714; 6G, Augmented /Virtual Reality</li>
                        <li>&#x2714; VLSI designs of AI implementations</li>
                        <li>&#x2714; AI/ML Chipsets</li>
                  </ul>
                </div>
         </div>
         <div className="line"></div>
         <div className="event2-con1-scope" data-aos='zoom-in-up'>
       
         <div className="event2-con1-orange">
              Submission Guidelines
        </div>
        <div className="event2-con1-gray-1">
                    Prospective authors are invited to submit 
                    full papers describing original, previously unpublished, complete work in four pages in 
                    A4 IEEE double column conference template, including figure, results and references. Submitted papers
                    will be reviewed by two to three technical committee or reviewers.
                    Accepted and registered papers of IETE CHENCON 2022 will be published in the conference proceedings.
                    Extended versions of the accepted and presented papers will be recommended
                    for publication in IETE Journals, SCOPUS, SCI and other indexed journals.
                    Authors must submit the papers through their Easy chair account using the following link: <a target='_blank' className='event2-con1-blue' href='https://easychair.org/conferences/?conf=ietechencon2022'>https://easychair.org/conferences/?conf=ietechencon2022</a> or submit the papers to
                    the Email ID: <span className='event2-con1-blue'>chencon2022@gmail.com</span>

        </div>
         </div>
         <div className="line" data-aos='zoom-in-up'></div>
    
         <div className="event2-con1-scope" data-aos='zoom-in-up'>
       
         <div className="event2-con1-orange-text" data-aos='zoom-in-up'>
         Selected and presented papers will be published in the Journal of Science and Technology (ISSN 2456–5660)
        </div>
         </div>
         <div className="line" data-aos='zoom-in-up'></div>
         <div className="event2-con1-table" data-aos='zoom-in-up'>
            <table>
                <tr>
                  <th>Registration Fee & Details</th>
                  <th>Important Dates</th>
                </tr>
                <tr>
                <td>
                    <div>
                        At least one author for each paper should register for the conference.<br/>
                        If an author has more than one accepted paper,<br/>
                        registration fee has to be paid for each Paper ID.<br/><br/>
                        IETE members including ISF : Rs. 1500 + GST<br/>
                        NON IETE participants : Rs. 2000 + GST<br/>
                        International Participants : $50
                    </div>
                  </td>
                  <td>
                        Last date for paper Submission : 06.05.2022<br/>
                        Notification of Acceptance : 10.05.2022<br/>
                        Registration on or before : 15.05.2022<br/>
                        Conference Date : 20.05.2022 & 21.05.2022
                  </td>
                </tr>
            </table>
         </div>
         <div className="event2-con1-table" data-aos='zoom-in-up'>
            <table>
                <tr>
                  <td>
                      <div>
                          <br/>
                          <h4>Patron</h4>
                          Prof Wg Cdr P. Prabhakar
                          <br/><br/>
                          <h4>Organizing Chair</h4>
                          Dr. N. Venkateswaran
                          <br/><br/>
                          <h4>Conference Co-Chairs</h4>
                          Mrs. T.J. Jeyaprabha
                          Mr. Arun
                          <br/>
                      </div>
                  </td>
                  <td rowSpan={0}>
                    <div >
                        <h4>Advisory Committee</h4>
                        Dr. J.W. Bakal<br/>
                        Dr. K.T.V Reddy<br/>
                        Dr. Surendra Pal<br/>
                        Prof. K.K. Aggarwal<br/>
                        Dr. M.H. Kori<br/>
                        Dr. Shiv Kumar<br/>
                        Dr. K. Jaya Shankar<br/>
                        Col. (Retd) K.S. Chakravarthi<br/>
                        Shri. S. Ramaswamy<br/>
                        Dr. Tata Sudhakar
                    </div>
                      
                  </td>
                </tr>
                <tr>
                  <td >
                  <div>
                          Mobile: 72000 96048<br/>
                          Phone: 044-28350773<br/>
                          Email: <span className='event2-con1-blue'>chencon2021@gmail.com</span><br/>
                          Website: <a target='_blank' className='event2-con1-blue' href='/'>http://ietechennai.in</a>
                      </div>
                  </td>
                </tr>
            </table>
         </div>
     </div>
     
       
   </div>
  )
}
