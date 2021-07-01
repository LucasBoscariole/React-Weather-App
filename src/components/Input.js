import React from 'react';
import { useGlobalContext } from '../context';
import { FaSearch } from 'react-icons/fa';
function Input() {
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()} className='input'>
        <input type='text' name='text' id='text' className='search-name' />
        <button className='search-btn'>
          <FaSearch />
        </button>
      </form>
    </section>
  );
}

export default Input;
