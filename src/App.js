import React from 'react';
import Infoday from './components/Infoday';
import Forecast from './components/Forecast';
import Input from './components/Input';

function App() {
  return (
    <main>
      <article>
        <Infoday />
        <Forecast />
        <Input />
      </article>
    </main>
  );
}

export default App;
