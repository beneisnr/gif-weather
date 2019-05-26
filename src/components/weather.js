import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather(props) {
  const [data, setData] = useState({ location: '', weather: {}, gif: '' });

  useEffect(() => {
    const fetchData = async (query) => {
      const result = await axios(
        `https://gif-weather.herokuapp.com/api/${query}`,
      );

      setData(result.data);
    };

    fetchData(props.match.params.query);
  }, [props.match.params.query]);

  return (
    <div>
      Weather for {props.match.params.query}
      <div>
        {!data.weather.currently && 'Loading'}
        {data.weather.currently && data.weather.currently.summary}
      </div>
    </div>
  );
}

export default Weather;
