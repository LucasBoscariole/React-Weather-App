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

function Forecast() {
  const { forecast } = useGlobalContext();
  if (forecast) {
    return (
      <section className='section-forecast'>
        {forecast.map((item) => {
          const { day, min, max } = item.temp;
          const { description, icon } = item.weather[0];
          return (
            <div className='card-container' key={day + min + max}>
              <div className='icon-forecast'>
                {icon === '01d' && <FaSun className='icon-forecast sun' />}
                {icon === '01n' && <FaSun className='icon-forecast sun' />}
                {icon === '02d' && (
                  <FaCloudSun className='icon-forecast cloud-sun' />
                )}
                {icon === '02n' && (
                  <FaCloudSun className='icon-forecast cloud-sun-night' />
                )}
                {icon === '03d' && <FaCloud className='icon-forecast cloud' />}
                {icon === '03n' && (
                  <FaCloud className='icon-forecast cloud-night' />
                )}
                {icon === '04d' && <FaCloud className='icon-forecast cloud' />}
                {icon === '04n' && (
                  <FaCloud className='icon-forecast cloud-night' />
                )}
                {icon === '09d' && (
                  <FaCloudRain className='icon-forecast rain' />
                )}
                {icon === '09n' && (
                  <FaCloudRain className='icon-forecast rain-night' />
                )}
                {icon === '10d' && (
                  <FaCloudSunRain className='icon-forecast sun-rain' />
                )}
                {icon === '10n' && (
                  <FaCloudSunRain className='icon-forecast sun-rain' />
                )}
                {icon === '11d' && (
                  <IoThunderstormSharp className='icon-forecast storm' />
                )}
                {icon === '11n' && (
                  <IoThunderstormSharp className='icon-forecast storm' />
                )}
                {icon === '13d' && (
                  <FaSnowflake className='icon-forecast snow' />
                )}
                {icon === '13n' && (
                  <FaSnowflake className='icon-forecast snow' />
                )}
                {icon === '50d' && <FaCloud className='icon-forecast cloud' />}
                {icon === '50n' && (
                  <FaCloud className='icon-forecast cloud-night' />
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
