import React from 'react';
import { EventCon1 } from './EventCon1';
import { EventCon2 } from './EventCont2';
import { HomeCards } from '../home/HomeCards';
import { EventCards } from './EventCards';
export const Event = () => {
  return (
    <div>
        <EventCon1/>
        <EventCon2/>
        <HomeCards/>
        <EventCards/>
    </div>
  )
}
