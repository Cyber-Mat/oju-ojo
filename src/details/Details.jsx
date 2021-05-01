import { useContext } from 'react';
import WeatherContext from '../utils/WeatherContext';
import './details.scss';

const Details = () => {
  const [{ currentWeather }] = useContext(WeatherContext);

  if (
    currentWeather === '' ||
    currentWeather === 'error' ||
    currentWeather.message
  ) {
    return (
      <div className='details'>
        <h3 className='details__header'>Weather Details</h3>
        <div className='details__content'>
          <p>
            <span>Pressure</span> <span>-</span>
          </p>
          <p>
            <span>Humidity</span>
            <span>-</span>
          </p>
          <p>
            <span>Wind</span>
            <span>-</span>
          </p>
          <p>
            <span>Visibility</span>
            <span>-</span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='details'>
        <h3 className='details__header'>Weather Details</h3>
        <div className='details__content'>
          <p>
            <span>Pressure</span>
            <span>
              {currentWeather.pressure
                ? currentWeather.pressure
                : currentWeather.main.pressure}
              hPa
            </span>
          </p>
          <p>
            <span>Humidity</span>
            <span>
              {currentWeather.humidity
                ? currentWeather.humidity
                : currentWeather.main.humidity}
              %
            </span>
          </p>
          <p>
            <span>Wind</span>
            <span>
              {currentWeather.wind_speed
                ? currentWeather.wind_speed
                : currentWeather.wind.speed}
              m/s
            </span>
          </p>
          <p>
            <span>Visibility</span>
            <span>{currentWeather.visibility / 1000}km</span>
          </p>
          {/* <p>
        <span>Pressure</span> <span>1029hPa</span>
      </p> */}
          {/* <p>
          <span>Dew point</span>
          <span>
            {Math.round(+currentWeather.dew_point)}
            <sup>0</sup>C
          </span>
        </p> */}
          {/* <p>
        <span>UV</span>
        <span>1</span>
      </p> */}
        </div>
      </div>
    );
  }
};

export default Details;
