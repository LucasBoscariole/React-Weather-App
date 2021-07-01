import React from 'react';
import { useGlobalContext } from '../context';

function Forecast() {
  const { forecast } = useGlobalContext();
  if (forecast) {
    return (
      <section className='section-forecast'>
        {forecast.map((item) => {
          const { day, min, max } = item.temp;
          const { description, icon } = item.weather[0];
          return <div className='card-forecast' key={day}></div>;
        })}
      </section>
    );
  } else {
    return <section className='section-forecast'></section>;
  }
}

export default Forecast;
