import React from 'react'

import { useParams } from 'react-router-dom';
export const UserDetails = () => {
  const params=useParams();
  const Userid=params.userId;
  return (
    <div className='user'>UserDetail {Userid}</div>
  )
}
