import React from 'react';
import { useGlobalContext } from '../context';

function Loading() {
  const { loading } = useGlobalContext();
  return (
    <>
      {' '}
      {loading && (
        <section className='loader'>
          <div></div>
          <div></div>
          <div></div>
        </section>
      )}{' '}
    </>
  );
}

export default Loading;
