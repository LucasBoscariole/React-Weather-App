import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const url =
  'api.openweathermap.org/data/2.5/forecast?q=london&appid=9765421ef06153319258cbb3b0e6803d';
const AppContext = React.createContext();

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

const AppProvider = ({ children }) => {
  const fetchWeather = async (url) => {
    const response = await axios(url).catch((err) => console.log(err));
    console.log(response);
  };
  useEffect(() => {
    fetchWeather(url);
  }, []);

  return <AppContext.Provider value='hi'>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
