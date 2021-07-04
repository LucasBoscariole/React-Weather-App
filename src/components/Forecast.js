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
import Day from './Day';

function Forecast() {
  const { forecast } = useGlobalContext();
  if (forecast) {
    return (
      <section className='section-forecast'>
        {forecast.map((item, index) => {
          const { day } = item.temp;
          const { description, icon } = item.weather[0];
          return (
            <div className='card-container' key={index}>
              <Day index={index} />
              <div className='icon-forecast'>
                {icon === '01d' && <FaSun className='icon-forecast-icon sun' />}
                {icon === '01n' && <FaSun className='icon-forecast-icon sun' />}
                {icon === '02d' && (
                  <FaCloudSun className='icon-forecast-icon cloud-sun' />
                )}
                {icon === '02n' && (
                  <FaCloudSun className='icon-forecast-icon cloud-sun-night' />
                )}
                {icon === '03d' && (
                  <FaCloud className='icon-forecast-icon cloud' />
                )}
                {icon === '03n' && (
                  <FaCloud className='icon-forecast-icon cloud-night' />
                )}
                {icon === '04d' && (
                  <FaCloud className='icon-forecast-icon cloud' />
                )}
                {icon === '04n' && (
                  <FaCloud className='icon-forecast-icon cloud-night' />
                )}
                {icon === '09d' && (
                  <FaCloudRain className='icon-forecast-icon rain' />
                )}
                {icon === '09n' && (
                  <FaCloudRain className='icon-forecast-icon rain-night' />
                )}
                {icon === '10d' && (
                  <FaCloudSunRain className='icon-forecast-icon sun-rain' />
                )}
                {icon === '10n' && (
                  <FaCloudSunRain className='icon-forecast-icon sun-rain' />
                )}
                {icon === '11d' && (
                  <IoThunderstormSharp className='icon-forecast-icon storm' />
                )}
                {icon === '11n' && (
                  <IoThunderstormSharp className='icon-forecast-icon storm' />
                )}
                {icon === '13d' && (
                  <FaSnowflake className='icon-forecast-icon snow' />
                )}
                {icon === '13n' && (
                  <FaSnowflake className='icon-forecast-icon snow' />
                )}
                {icon === '50d' && (
                  <FaCloud className='icon-forecast-icon cloud' />
                )}
                {icon === '50n' && (
                  <FaCloud className='icon-forecast-icon cloud-night' />
                )}
              </div>
              <div className='temperature'>
                <h3>{description}</h3>
                <span>{day}°C</span>
              </div>
            </div>
          );
        })}
      </section>
    );
  } else {
    return <section className='section-forecast'></section>;
  }
}

export default Forecast;
