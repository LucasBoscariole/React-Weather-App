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
    return <article></article>;
  } else {
    return <article></article>;
  }
}

export default Infoday;

//             {icon === '01d' && <FaSun className='icon sun' />}
//             {icon === '01n' && <FaSun className='icon sun' />}
//             {icon === '02d' && <FaCloudSun className='icon cloud-sun' />}
//             {icon === '02n' && <FaCloudSun className='icon cloud-sun-night' />}
//             {icon === '03d' && <FaCloud className='icon cloud' />}
//             {icon === '03n' && <FaCloud className='icon cloud-night' />}
//             {icon === '04d' && <FaCloud className='icon cloud' />}
//             {icon === '04n' && <FaCloud className='icon cloud-night' />}
//             {icon === '09d' && <FaCloudRain className='icon rain' />}
//             {icon === '09n' && <FaCloudRain className='icon rain-night' />}
//             {icon === '10d' && <FaCloudSunRain className='icon sun-rain' />}
//             {icon === '10n' && <FaCloudSunRain className='icon sun-rain' />}
//             {icon === '11d' && <IoThunderstormSharp className='icon storm' />}
//             {icon === '11n' && <IoThunderstormSharp className='icon storm' />}
//             {icon === '13d' && <FaSnowflake className='icon snow' />}
//             {icon === '13n' && <FaSnowflake className='icon snow' />}
