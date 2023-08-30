import React from 'react'
import '../../css/contact.css'
export const Contact = () => {
  return (
   <>
       <div className='contact-con'>
         <svg className='contact-svg' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(24, 225, 209, 1)" offset="0%" />
          <stop id="stop2" stopColor="rgba(0, 189, 227, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M23.4,-28.5C28.9,-23.3,30.9,-14.5,33.6,-5.1C36.2,4.3,39.4,14.4,36.5,22.6C33.6,30.8,24.7,37.1,15.1,39.9C5.4,42.8,-4.9,42.3,-12.6,38C-20.3,33.8,-25.4,25.7,-29.9,17.5C-34.4,9.3,-38.3,0.9,-37.7,-7.4C-37.1,-15.7,-32,-23.9,-25,-28.9C-18,-33.9,-9,-35.6,0,-35.5C8.9,-35.5,17.9,-33.7,23.4,-28.5Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="0"
        style={{ transition: 'all 0.3s ease 0s' }}
        stroke="url(#sw-gradient)"
      />
    </svg>
    <div className='form'>
        <form action="">
            <input type="text" placeholder='Name' minLength={3} required/>
            <input type="email" placeholder='Mail-Id' required />
            <input type='text' placeholder='Subject' minLength={20} required/>
            <textarea name="" id="" cols="30" rows="8" placeholder='Message...' required minLength={40}></textarea>
            
            <button type='submit'>Send-Mail</button>
        </form>
        <img className='contact-img' src="/img/svg/undraw_social_thinking_re_y8cc.svg" alt="img" />
    </div>
    </div>
    <div className="contact-info">
        <div className="contact-info-con">
            <div className="contact-info-items">
                <div>
                    <svg className='address-svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3V152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6V503zM15.1 187.3C6 191 0 199.8 0 209.6V480.4c0 17 17.1 28.6 32.9 22.3L160 451.8V200.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77V449.4l192 54.9V255z"/></svg>
                </div>
                <div>
                    Location:<br/>
                    IETE Chennai centre, No: 37,<br/>
                    Conran Smith Road Entrance Peters Road,<br/>
                    Gopalapuram,Chennai,<br/>
                    Tamil Nadu 600086
                </div>
            </div>
            <div className="contact-info-items">
                <div>
                      <svg className='address-svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg>
                </div>
                <div>
                    Email:
                    ietechennai@gmail.com
                </div>
            </div>
            <div className="contact-info-items">
                <div>
                    <svg className='address-svg' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                </div>
                <div>
                    Call:
                    044 2835 0773
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
