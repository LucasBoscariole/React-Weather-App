import React from 'react';

function Day({ index }) {
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let date = new Date().getDay();
  return (
    <>
      <h4 className='day color-title'>{weekDay[date + index + 1]}</h4>
    </>
  );
}

export default Day;
