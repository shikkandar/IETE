import React, { useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../css/nav1.css'
function Navbar() {
  // const navItem = ["Home", "About", "Committee", "Events", "Membership", "Chencon", "Newsletter", "Contact"];
  // const path = ["/", "/about", "/ExecutiveCommittee", "/Events", "/Membership", "/Chencon", "/Chenlink Newsletter", "/Contact"];

  const navLinkActive = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "#001F4D" : "transparent",
    };
  };
useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");
    const scrollDistance = 50;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("hide");
      } else {
        if (currentScrollPos > scrollDistance) {
          navbar.classList.add("hide");
        }
      }

      prevScrollPos = currentScrollPos;

      if (currentScrollPos === 0) {
        navbar.classList.remove("hide");
        navbar.classList.remove("top");
      }
      else{
        navbar.classList.add("top");
      }
    };
   
   
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

     
  }, []);

 
  const [showIeteObb, setShowIeteObb] = useState(false);

  const handleMouseEnter = () => {
    setShowIeteObb(true);
  };

  const handleMouseLeave = () => {
    setShowIeteObb(false);
  };
  

  const refreshPage = () => {
 
    if (window.innerWidth < 1000) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      window.location.reload();
    }
   
  };
  return (
    <>
     
      <div className='navbar'>
        <a href='/'><img className='header-img' src='/img/logo1.png' alt='Iete-logo'  onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} /></a>
       
        <input type="checkbox" id="menu-bar" />
        <label htmlFor="menu-bar" className="checkbtn">
          <svg  className='toggle-btn' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
        </label>
        <nav id='nav' >
          <ul>
              <li className='Home' key={0} onClick={refreshPage}>
                <NavLink id='navLinks'style={navLinkActive} to='/'>Home</NavLink>
              </li>
              <li className='Home' key={0} onClick={refreshPage}>
                <NavLink id='navLinks'style={navLinkActive} to='/about'>about</NavLink>
              </li>
              <li className='Home' key={0} onClick={refreshPage}>
                <NavLink id='navLinks'style={navLinkActive} to='/ExecutiveCommittee'>Committee</NavLink>
              </li>
              <li className='Home' key={0} onClick={refreshPage}>
                <NavLink id='navLinks'style={navLinkActive} to='/Events'>Events</NavLink>
              </li>
              <li className='Home' key={0} onClick={refreshPage}>
                <NavLink id='navLinks'style={navLinkActive} to='/Membership'>Membership</NavLink>
              </li>
              <li className='Home' key={0} >
              <Link id='navLinks' to='#'>Chencon</Link>
                <ul class="Comitee">
                    <li style={{borderTop:"none" }} onClick={refreshPage}>
                      <NavLink to='/Chencon'>2022</NavLink>
                    </li>
                    <li>
                      <NavLink to='http://ietechennai.in/assets/pdf/chencon2021_proceedings.pdf'>2021</NavLink>
                    </li>
                 </ul>
              </li>
              <li className='Home'>
                <Link id='navLinks' to='#'>Newsletter</Link>
                <ul class="Comitee">
                    <li style={{borderTop:"none" }} onClick={refreshPage}>
                      <NavLink to='http://ietechennai.in/assets/pdf/chenlink1_3.pdf'>Vol. 1,No 3</NavLink>
                    </li>
                    <li style={{borderTop:"none" }}>
                      <NavLink to='http://ietechennai.in/assets/pdf/chenlink1_2.pdf'>Vol. 1,No 2</NavLink>
                    </li>
                    <li style={{borderTop:"none" }}>
                      <NavLink to='http://ietechennai.in/assets/pdf/chenlink1_1.pdf'>Vol. 1,No 1</NavLink>
                    </li>
                    
                 </ul>
              </li>
              <li className='Home' key={0} onClick={refreshPage}>
                <NavLink id='navLinks'style={navLinkActive} to='/Contact'>Contact</NavLink>
              </li>

          </ul>
        </nav>
      </div>
      {showIeteObb && (
          <div className="iete-obb">
            The Institution of Electronics and Telecommunication Engineers, Chennai
            <div className="traiangle">
            <div className="traiangle1"></div>
            </div>
           
          </div>
        )}
    
    </>
  );
  }

export default Navbar;
