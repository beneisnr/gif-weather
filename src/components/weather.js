import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './weatherCard';

function Weather(props) {
  const [data, setData] = useState({ location: '', weather: {}, gif: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async (query) => {
      try {
        const result = await axios(
          `https://gif-weather.herokuapp.com/api/${query}`,
        );
        setData(result.data);
      } catch (err) {
        setError(err.response.data.error);
      }
    };
    fetchData(props.match.params.query);
  }, [props.match.params.query]);

  return (
    <div id="weather">
      {(!error && !data.weather.currently) && <div id="loading">Loading</div>}
      {error && <div id="error">Oops! {error}</div>}
      {data.weather.currently
        && <WeatherCard location={data.location} weather={data.weather} />
      }
    </div>
  );
}

export default Weather;
