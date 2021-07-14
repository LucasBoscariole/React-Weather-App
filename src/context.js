import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const apikey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [forecast, setForecast] = useState();
  const [data, setData] = useState();
  const [query, setQuery] = useState('California');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apikey}`;

  const fetchWeather = async () => {
    setLoading(true);
    try {
      //Day
      const response = await axios(url);
      const data = response.data;
      const { lat, lon } = data.coord;

      //Forecast
      const url_forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${apikey}`;
      const forecast = await axios(url_forecast);
      const daily_forecast = forecast.data.daily.slice(0, 4);
      setData(data);
      setForecast(daily_forecast);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [query]);

  return (
    <AppContext.Provider
      value={{ forecast, data, setQuery, query, error, setError, loading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
