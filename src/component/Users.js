import React from 'react'

import { Outlet } from 'react-router-dom';
export const Users = () => {
  return (
   <div>
     <div className='user'>
        <h1>Users1</h1>
        <h1>Users2</h1>
        <h1>Users3</h1>
      
    </div>
    <Outlet/>
   </div>
  )
}
