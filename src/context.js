import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [forecast, setForecast] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [query, setQuery] = useState('California');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apikey}`;
  const fetchWeather = async () => {
    try {
      //Day
      const response = await axios(url);
      const data = response.data;
      const { lat, lon } = data.coord;
      setData(data);

      //Forecast
      const url_forecast = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${apikey}`;
      const forecast = await axios(url_forecast);
      const daily_forecast = forecast.data.daily.slice(0, 4);
      setForecast(daily_forecast);

      console.log(data);
      console.log(forecast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [query]);

  return (
    <AppContext.Provider value={{ forecast, loading, data, setQuery, query }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
