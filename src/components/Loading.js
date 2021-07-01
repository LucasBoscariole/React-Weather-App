import React from 'react';
import { useGlobalContext } from '../context';

function Loading() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <section className='loader'>
        <div></div>
        <div></div>
        <div></div>
      </section>
    );
  } else {
    return null;
  }
}

export default Loading;
