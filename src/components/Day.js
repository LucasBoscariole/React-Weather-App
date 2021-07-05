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
  let stringIndex = date + index + 1;
  if (stringIndex > 6) {
    stringIndex = stringIndex - 6;
  }
  return (
    <>
      <h4 className='day color-title'>{weekDay[stringIndex]}</h4>
    </>
  );
}

export default Day;
