import React from 'react';
import { useGlobalContext } from '../context';
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudRain,
  FaCloudSunRain,
  FaSnowflake,
} from 'react-icons/fa';
import { IoThunderstormSharp } from 'react-icons/io5';

function Infoday() {
  const { data } = useGlobalContext();
  if (data) {
    const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
    const name = data.name;
    const { speed } = data.wind;
    const { description, icon } = data.weather[0];
    return (
      <section className='section-infoday'>
        <div className='cart-infoday'></div>
        <div className='cart-infoday-2'></div>
      </section>
    );
  } else {
    return <section className='section-infoday'></section>;
  }
}

export default Infoday;
