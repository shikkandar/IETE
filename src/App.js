import {Routes,Route} from 'react-router-dom';
import About from './component/about';
import Addmission from './component/Admission';
import Academic from './component/academic';
import Others from './component/others';
import { Placement } from './component/placement';
import { Nomatch } from './component/nomathch';
import { Featured } from './component/featured';
import { New } from './component/new';
import { Users } from './component/Users';
import { UserDetails } from './component/UserDetails';
import { Admin } from './component/Admin';
import { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Home } from './component/home/Home';
function App() {
  const[loading,setLoding]=useState(false)
  useEffect(()=>{
    setLoding(false)
    setTimeout(()=>{
      setLoding(false)
    },5000)
  },[])
  return (
    <div className='App'>
      {
        loading?
        <ClipLoader
        color={'blue'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/ExecutiveCommittee' element={<Addmission/>} />
      <Route path='/Events' element={<Academic/>} />
      <Route path='/Membership' element={<Users/>}>
        <Route path=':userId' element={<UserDetails/>}/>
        <Route path='admin' element={<Admin/>}/>
      </Route>
      <Route path='/Chencon' element={<Placement/>}>
        <Route index element={<Featured/>}/>
        <Route path='featured' element={<Featured/>}/>
        <Route path='new' element={<New/>}/>
      </Route>
      <Route path='/Chenlink Newsletter' element={<Others/>} />
      <Route path='*' element={<Nomatch/>}/>
    </Routes>
      }
      
    </div>
    
 
    
  );
}

export default App;
  