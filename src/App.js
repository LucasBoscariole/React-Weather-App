import React from 'react';
import Dashboard from './components/Dashboard';
import Input from './components/Input';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <section className='dashboard'>
        <Input />
        <Error />
        <Dashboard />
      </section>
      <Footer />
    </>
  );
}

export default App;
