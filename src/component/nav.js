import {NavLink } from 'react-router-dom';
import '../css/nav1.css'
function Navbar(){
    const navItem=["Home","About","Executive Committee","Events","Membership","Chencon","Chenlink Newsletter","Contact"]
    const path=["/","/about","/ExecutiveCommittee","/Events","/Membership","/Chencon","/Chenlink Newsletter","Contact"]
   
    const navLinkActive=({isActive})=>{
        return{
            color:isActive ? "white":"black",
            backgroundColor:isActive ? "#001F4D":"transparent"
        }
    }
    return(
       <div className='navbar'>
        
        <a href='/'><img className='header-img' src='/img/logo1.jpg' alt='builders-logo'/></a>
        <input type="checkbox" id="menu-bar"/>
        <label for="menu-bar" className="checkbtn">
        <svg className='toggle-btn' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </label>
        <nav>
            <ul>
            {navItem.map((item, index) => (<li className={navItem[index]} key={index}>
                <NavLink style={navLinkActive} to={path[index]}>{item}</NavLink >
                </li>))}

            </ul>
            
        </nav>
       </div>
    )
}
export default Navbar;