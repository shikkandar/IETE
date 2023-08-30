import {Routes,Route} from 'react-router-dom';
import About from './component/about/about';
import { Commitee } from './component/commitee/Commitee';
import { Nomatch } from './component/nomathch';
import { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Home } from './component/home/Home';
import { Event } from './component/event-pages/Event';
import { Members } from './component/members/Members';
import { Contact } from './component/contact/Contact';
import { Chencon } from './component/chencon/Chencon';
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
      <Route path='/ExecutiveCommittee' element={<Commitee/>} />
      <Route path='/Events' element={<Event/>} />
      <Route path='/Membership' element={<Members/>}/>
      <Route path='/Chencon' element={<Chencon/>}/>
      <Route path='/Contact' element={<Contact/>} />
      <Route path='*' element={<Nomatch/>}/>
    </Routes>
      }
      
    </div>
    
 
    
  );
}

export default App;
  