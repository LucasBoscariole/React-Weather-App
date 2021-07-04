import React from 'react';
import { useGlobalContext } from '../context';

function Error() {
  const { error, setError } = useGlobalContext();
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }
  return (
    <div className='error'>
      {error && <h4>please, type a valid country or city!</h4>}
    </div>
  );
}

export default Error;
