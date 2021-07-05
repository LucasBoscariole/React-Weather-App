import React from 'react';
import Infoday from './Infoday';
import Forecast from './Forecast';
import Loading from './Loading';
import { useGlobalContext } from '../context';

function Dashboard() {
  return (
    <>
      <Infoday />
      <Forecast />
      <Loading />
    </>
  );
}

export default Dashboard;
