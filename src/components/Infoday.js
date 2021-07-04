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
    const { temp, feels_like, temp_min, temp_max } = data.main;
    const name = data.name;
    const { speed } = data.wind;
    const { description, icon } = data.weather[0];
    const { country } = data.sys;
    return (
      <article className='container-day'>
        <div className='container-icon'>
          {icon === '01d' && <FaSun className='icon sun' />}
          {icon === '01n' && <FaSun className='icon sun' />}
          {icon === '02d' && <FaCloudSun className='icon cloud-sun' />}
          {icon === '02n' && <FaCloudSun className='icon cloud-sun-night' />}
          {icon === '03d' && <FaCloud className='icon cloud' />}
          {icon === '03n' && <FaCloud className='icon cloud-night' />}
          {icon === '04d' && <FaCloud className='icon cloud' />}
          {icon === '04n' && <FaCloud className='icon cloud-night' />}
          {icon === '09d' && <FaCloudRain className='icon rain' />}
          {icon === '09n' && <FaCloudRain className='icon rain-night' />}
          {icon === '10d' && <FaCloudSunRain className='icon sun-rain' />}
          {icon === '10n' && <FaCloudSunRain className='icon sun-rain' />}
          {icon === '11d' && <IoThunderstormSharp className='icon storm' />}
          {icon === '11n' && <IoThunderstormSharp className='icon storm' />}
          {icon === '13d' && <FaSnowflake className='icon snow' />}
          {icon === '13n' && <FaSnowflake className='icon snow' />}
          {icon === '50d' && <FaCloud className='icon cloud' />}
          {icon === '50n' && <FaCloud className='icon cloud-night' />}
        </div>
        <div className='line'></div>
        <div className='container-info'>
          <p className='color-subtitle day-date'>today,</p>
          <h2 className='color-title'>
            {name}, <span>{country}</span>
          </h2>
          <h4 className='color-subtitle desc'>{description}</h4>
          <p className='color-subtitle'>Wind: {speed}</p>
          <p className='color-subtitle'>Feels Like: {feels_like}°C</p>
          <div className='flex-container'>
            <h4 className='color-subtitle temp-min'>{temp_min}°C</h4>
            <h3 className='color-title temp-max'>{temp}°C</h3>
            <h4 className='color-subtitle temp-min'>{temp_max}°C</h4>
          </div>
        </div>
      </article>
    );
  } else {
    return <article></article>;
  }
}

export default Infoday;
