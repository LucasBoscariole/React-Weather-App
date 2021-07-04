import React from 'react'
import Infoday from './Infoday';
import Forecast from './Forecast';
import { useGlobalContext } from '../context';

function Dashboard() {
 const {forecast} = useGlobalContext()
 if (forecast) {
  return <>
   <Infoday/>
   <Forecast/>
  </>
 } else {
  return <div className='loader'>
   <div></div>
   <div></div>
   <div></div>
  </div>
 }
 
}

export default Dashboard
