import React from 'react';

function WeatherCard(props) {
  const icons = {
    'clear-day': '☀️',
    'clear-night': '🌙',
    'partly-cloudy-day': '⛅️',
    'partly-cloudy-night': '☁️',
    rain: '🌧',
    snow: '🌨',
    sleet: '🌨',
    wind: '💨',
    fog: '☁️',
    cloudy: '☁️',
    default: '🤯',
  };

  const { weather, location } = props;

  return (
    <div id="weather-modal">
      <h1>{location}</h1>
      <span id="icon">
        {(weather.icon in icons) ? icons[weather.icon] : icons.default}
      </span>
      <span id="temp">
        {weather.summary} {Math.ceil(weather.temperature)}&#176;F
      </span>
    </div>
  );
}

export default WeatherCard;
