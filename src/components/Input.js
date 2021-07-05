import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { FaSearch } from 'react-icons/fa';
function Input() {
  const { query, setQuery } = useGlobalContext();
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      setQuery(city);
      setCity('');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='input-container'>
        <input
          type='text'
          placeholder='Type a city...'
          className='input'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type='submit' className='btn'>
          <FaSearch className='icon-btn' />
        </button>
      </form>
    </>
  );
}

export default Input;
