import React from 'react';
import Infoday from './components/Infoday';
import Forecast from './components/Forecast';
import Input from './components/Input';

function App() {
  return (
    <main className='background'>
      <Input />
      <section>
        <Infoday />
        <Forecast />
      </section>
    </main>
  );
}

export default App;
