import React from 'react';
import moment from 'moment';

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
  const { currently, hourly } = weather;

  return (
    <div id="weather-modal">
      <h1>{location}</h1>
      <div id="weather-modal-currently">
        <h2>Now</h2>
        <span className="icon">
          {(currently.icon in icons) ? icons[currently.icon] : icons.default}
        </span>
        <span className="temp">
          {currently.summary} {Math.ceil(currently.temperature)}&#176;F
        </span>
      </div>
      <div id="weather-modal-hourly">
        <h2>Later</h2>
        <span className="summary">
          {hourly.summary}
        </span>
        {
          hourly.data.map((hour) => {
            return (
              <div className="hourly-card">
                <span className="time">
                  {moment(hour.time, 'X').format('ha')}
                </span>
                <span className="temp">
                  {hour.temperature}&#176;
                </span>
                <div>
                  {hour.summary}
                  <span role="img" aria-label={hour.icon}>
                    {(hour.icon in icons) ? icons[hour.icon] : icons.default}
                  </span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default WeatherCard;
